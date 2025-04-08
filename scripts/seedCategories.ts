import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import * as dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: ".env.local" });

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const categories = [
    {
        name: "IT Usluge",
        description: "Razvoj softvera, održavanje sistema, IT konsalting i druge IT usluge",
        imageUrl: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
    },
    {
        name: "Finansijske Usluge",
        description: "Računovodstvo, poresko savetovanje, finansijsko planiranje i konsalting",
        imageUrl: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg"
    },
    {
        name: "Marketing",
        description: "Digitalni marketing, SEO, društvene mreže i strategije brendiranja",
        imageUrl: "https://images.pexels.com/photos/3184462/pexels-photo-3184462.jpeg"
    },
    {
        name: "Pravne Usluge",
        description: "Pravno savetovanje, zastupanje u sudskim postupcima i poslovno pravo",
        imageUrl: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg"
    },
    {
        name: "HR Usluge",
        description: "Zapošljavanje, obuka zaposlenih, HR konsalting i upravljanje ljudskim resursima",
        imageUrl: "https://images.pexels.com/photos/3184461/pexels-photo-3184461.jpeg"
    },
    {
        name: "Nekretnine",
        description: "Prodaja i iznajmljivanje poslovnih prostora, upravljanje nekretninama",
        imageUrl: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
    }
];

const seedCategories = async () => {
    try {
        const categoriesRef = collection(db, "categories");
        
        for (const category of categories) {
            await addDoc(categoriesRef, category);
            console.log(`Added category: ${category.name}`);
        }
        
        console.log("Successfully seeded categories!");
    } catch (error) {
        console.error("Error seeding categories:", error);
    }
};

seedCategories(); 