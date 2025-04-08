import { PageHead, PageTemplate } from "../components/app";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import Image from "next/image";

interface Category {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

const Categories: NextPage = () => {
    const router = useRouter();
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesRef = collection(db, "categories");
                const snapshot = await getDocs(categoriesRef);
                const categoriesData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Category[];
                setCategories(categoriesData);
            } catch (err) {
                console.error("Error fetching categories:", err);
                setError("Greška pri učitavanju kategorija");
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return (
        <PageTemplate
            title="Kategorije | Biznis Centar"
            description="Pregled svih kategorija usluga na Biznis Centru"
        >
            <PageHead
                title="Kategorije | Biznis Centar"
                description="Pregled svih kategorija usluga na Biznis Centru"
                keywords="kategorije, biznis centar, usluge"
            />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Kategorije Usluga</h1>
                    <button
                        onClick={() => router.push("/home")}
                        className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                    >
                        Nazad na početnu
                    </button>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-[400px] flex flex-col"
                                onClick={() => router.push(`/categories/${category.id}`)}
                            >
                                <div className="aspect-w-16 aspect-h-9 h-48">
                                    <Image
                                        src={category.imageUrl}
                                        alt={category.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                                    <p className="text-gray-600 flex-1">{category.description}</p>
                                    <div className="mt-4">
                                        <span className="text-blue-600 text-sm font-medium">
                                            Pogledaj usluge →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </PageTemplate>
    );
};

export default Categories; 