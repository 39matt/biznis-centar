import Link from "next/link";
import { useAuth } from "../../../hooks/useAuth";

export const UserProfile = () => {
    const { user, signOut } = useAuth();

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    if (!user) {
        return (
            <div className="flex items-center gap-4">
                <Link 
                    href="/login"
                    className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                    Prijava
                </Link>
                <Link 
                    href="/signup"
                    className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                >
                    Registracija
                </Link>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-4">
            <Link 
                href="/profile"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
            >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                    {user.name?.[0] || 'U'}
                </div>
                <span className="font-medium">{user.name || 'Korisnik'}</span>
            </Link>
            <button
                onClick={handleSignOut}
                className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-500 transition-colors"
            >
                Odjavi se
            </button>
        </div>
    );
};
