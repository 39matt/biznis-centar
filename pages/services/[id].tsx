import { PageHead, PageTemplate } from "../../components/app";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc, DocumentReference } from "firebase/firestore";
import { db } from "../../lib/firebase";
import Image from "next/image";

interface Job {
    id: string;
    name: string;
    price: string;
}

interface Service {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: string;
    categoryId: string;
    categoryName: string;
    providerId: string;
    providerName: string;
    rating: number;
    reviews: number;
    location: string;
    contact: string;
    jobs: DocumentReference[];
}

const ServicePage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [service, setService] = useState<Service | null>(null);
    const [jobsData, setJobsData] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchService = async () => {
            if (!id) return;

            try {
                const serviceRef = doc(db, "services", id as string);
                const serviceDoc = await getDoc(serviceRef);

                if (!serviceDoc.exists()) {
                    setError("Usluga nije pronađena");
                    setLoading(false);
                    return;
                }

                const serviceData = serviceDoc.data() as Service;

                // inside fetchService
                const jobDocs = await Promise.all(
                    (serviceData.jobs || []).map(async (jobRef) => {
                        const jobSnap = await getDoc(jobRef);
                        if (!jobSnap.exists()) return null;

                        const jobData = jobSnap.data();
                        const jobsArray: Job[] = Object.entries(jobData).map(([name, price]) => ({
                            id: jobSnap.id + "-" + name, // make unique key
                            name,
                            price: price as string,
                        }));

                        return jobsArray;
                    })
                );

// Flatten the array of arrays and filter nulls
                const flattenedJobs = jobDocs.flat().filter((j): j is Job => j !== null);
                setJobsData(flattenedJobs);


                setService(serviceData);
            } catch (err) {
                console.error("Error fetching service:", err);
                setError("Greška pri učitavanju usluge");
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, [id]);

    if (loading) {
        return (
            <PageTemplate
                title="Učitavanje... | Biznis Centar"
                description="Učitavanje detalja usluge"
            >
                <div className="flex justify-center items-center min-h-[60vh]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            </PageTemplate>
        );
    }

    if (error || !service) {
        return (
            <PageTemplate
                title="Greška | Biznis Centar"
                description="Greška pri učitavanju usluge"
            >
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">{error || "Usluga nije pronađena"}</h1>
                        <button
                            onClick={() => router.push("/categories")}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Nazad na kategorije
                        </button>
                    </div>
                </div>
            </PageTemplate>
        );
    }

    return (
        <PageTemplate
            title={`${service.name} | Biznis Centar`}
            description={service.description}
        >
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col gap-8">
                    {/* Service Image */}
                    <div className="w-full relative">
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src={service.imageUrl}
                                alt={service.name}
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />

                        </div>
                    </div>


                    {/* Service Details */}
                    <div className="lg:w-3/4 mx-auto">
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{service.name}</h1>
                            <div className="flex items-center gap-4 text-gray-600">
                                <span>{service.categoryName}</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">O usluzi</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">Informacije o pružaocu</h2>
                            <p className="text-gray-600">Pružalac: {service.providerName}</p>
                            <p className="text-gray-600">Kontakt: {service.contact}</p>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${
                                                i < service.rating ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-gray-600">({service.reviews} recenzija)</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => router.push(`/contact?serviceId=${service.id}`)}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Kontaktiraj pružaoca
                            </button>
                        </div>

                        {jobsData.length > 0 && (
                            <div className="my-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Usluge u ponudi</h2>
                                <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
                                    <table className="min-w-full bg-white text-sm text-left text-gray-700">
                                        <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                                        <tr>
                                            <th className="px-6 py-3">Naziv</th>
                                            <th className="px-6 py-3">Cena</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {jobsData.map((job) => (
                                            <tr key={job.id} className="border-t hover:bg-gray-50">
                                                <td className="px-6 py-4 font-medium text-gray-900">{job.name}</td>
                                                <td className="px-6 py-4">{job.price}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        )}



                    </div>
                    {/* Location Overlay */}

                    <div className="w-full inline text-gray-800 text-sm px-3 py-1 rounded-lg shadow mx-auto">
                        <iframe
                            className={"w-full h-48 sm:h-64"}
                            src={service.location}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};

export default ServicePage; 