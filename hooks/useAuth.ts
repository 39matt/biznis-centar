import { create } from 'zustand';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  User as FirebaseUser,
  updateProfile
} from 'firebase/auth';
import { auth } from '../lib/firebase';

interface User {
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string, name: string) => Promise<void>;
    signOut: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
    user: null,
    loading: true,
    signIn: async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user;
            set({
                user: {
                    name: firebaseUser.displayName || 'User',
                    email: firebaseUser.email || '',
                }
            });
        } catch (error) {
            console.error('Error signing in:', error);
            throw error;
        }
    },
    signUp: async (email: string, password: string, name: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user;
            await updateProfile(firebaseUser, { displayName: name });
            set({
                user: {
                    name: name,
                    email: firebaseUser.email || '',
                }
            });
        } catch (error) {
            console.error('Error signing up:', error);
            throw error;
        }
    },
    signOut: async () => {
        try {
            await firebaseSignOut(auth);
            set({ user: null });
        } catch (error) {
            console.error('Error signing out:', error);
            throw error;
        }
    },
    resetPassword: async (email: string) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            console.error('Error resetting password:', error);
            throw error;
        }
    }
}));

// Set up auth state listener
onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
        useAuth.setState({
            user: {
                name: firebaseUser.displayName || 'User',
                email: firebaseUser.email || '',
            },
            loading: false
        });
    } else {
        useAuth.setState({
            user: null,
            loading: false
        });
    }
}); 