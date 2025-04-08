import { PageHead, PageTemplate } from "../../components/app";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";
import Image from "next/image";

interface Category {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

interface Service {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: string;
    rating: number;
    reviews: number;
    location: string;
}

const CategoryPage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [category, setCategory] = useState<Category | null>(null);
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCategoryAndServices = async () => {
            if (!id) return;

            try {
                // Fetch category
                const categoryRef = doc(db, "categories", id as string);
                const categoryDoc = await getDoc(categoryRef);

                if (!categoryDoc.exists()) {
                    setError("Kategorija nije pronađena");
                    setLoading(false);
                    return;
                }

                const categoryData = categoryDoc.data() as Category;
                setCategory({ id: categoryDoc.id, ...categoryData });

                // Fetch services for this category
                const servicesRef = collection(db, "services");
                const q = query(servicesRef, where("categoryId", "==", id));
                const servicesSnapshot = await getDocs(q);
                const servicesData = servicesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Service[];
                setServices(servicesData);
            } catch (err) {
                console.error("Error fetching category and services:", err);
                setError("Greška pri učitavanju kategorije i usluga");
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryAndServices();
    }, [id]);

    if (loading) {
        return (
            <PageTemplate
                title="Učitavanje... | Biznis Centar"
                description="Učitavanje kategorije i usluga"
            >
                <div className="flex justify-center items-center min-h-[60vh]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            </PageTemplate>
        );
    }

    if (error || !category) {
        return (
            <PageTemplate
                title="Greška | Biznis Centar"
                description="Greška pri učitavanju kategorije"
            >
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">{error || "Kategorija nije pronađena"}</h1>
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
            title={`${category.name} | Biznis Centar`}
            description={category.description}
        >
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h1>
                    <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => router.push(`/services/${service.id}`)}
                        >
                            <div className="relative aspect-w-16 aspect-h-9">
                                <Image
                                    src={service.imageUrl}
                                    alt={service.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                                <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-4 h-4 ${
                                                        i < service.rating ? "text-yellow-400" : "text-gray-300"
                                                    }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">({service.reviews})</span>
                                    </div>
                                    <div className="text-lg font-semibold text-gray-900">{service.price}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageTemplate>
    );
};

export default CategoryPage;
