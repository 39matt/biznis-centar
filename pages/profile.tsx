import { Button, InputText, PageHead } from "../components/app";
import type { NextPage } from "next";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { getFirebaseErrorMessage } from "../utils/firebaseErrors";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
    const { user, signOut } = useAuth();
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setEmail(user.email || "");
        }
    }, [user]);

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        try {
            // Here you would typically update the user profile
            // For now, we'll just simulate a successful update
            setSuccess("Profil je uspešno ažuriran.");
        } catch (error: any) {
            setError(getFirebaseErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut();
            router.push("/");
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    if (!user) {
        return null;
    }

    return (
        <>
            <PageHead
                title="Profil | Biznis Centar"
                description="Upravljajte vašim profilom na Biznis Centru"
                keywords="profil, biznis centar, korisnički profil"
            />
            <div className="max-w-2xl mx-auto px-4 py-8">
                <div className="flex justify-between w-full mb-8">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => router.push("/home")}
                            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                        >
                            Nazad na početnu
                        </button>
                    </div>
                        <h1 className="text-3xl font-bold">Moj Profil</h1>
                    <button
                        onClick={handleSignOut}
                        className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-500 transition-colors"
                    >
                        Odjavi se
                    </button>
                </div>
                
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}
                
                {success && (
                    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                        {success}
                    </div>
                )}

                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-medium">
                            {user.name?.[0] || 'U'}
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">{user.name || 'Korisnik'}</h2>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <InputText
                            label="Ime i prezime"
                            type="text"
                            placeholder="Unesite vaše ime i prezime"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        
                        <InputText
                            label="Email adresa"
                            type="email"
                            placeholder="Vaša email adresa"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled
                        />

                        <div className="flex justify-end">
                            <Button 
                                type="submit" 
                                className="bg-blue-600 hover:bg-blue-500 text-white"
                                disabled={loading}
                            >
                                {loading ? "Čuvanje..." : "Sačuvaj promene"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Profile;     