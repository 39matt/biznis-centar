import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const sampleServices = [
  {
    name: "Auto Servis Marko",
    brandUrl: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg",
    rating: 4.8,
    reviews: 234,
    category: "Auto mehanika",
    price: 2,
    bonus: "Popust na prvi servis",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Stomatološka ordinacija Smile",
    brandUrl: "https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg",
    rating: 4.9,
    reviews: 321,
    category: "Zubar",
    price: 3,
    bonus: "Besplatan pregled",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Frizerski salon Elegance",
    brandUrl: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg",
    rating: 4.7,
    reviews: 189,
    category: "Frizerske usluge",
    price: 2,
    bonus: "20% popusta na šišanje",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Vodoinstalater Petar",
    brandUrl: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg",
    rating: 4.6,
    reviews: 156,
    category: "Vodoinstalater",
    price: 2,
    bonus: "Hitne intervencije 24/7",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Električar Jovan",
    brandUrl: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
    rating: 4.8,
    reviews: 202,
    category: "Električar",
    price: 2,
    bonus: "Besplatna procena",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Građevinske usluge M&G",
    brandUrl: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
    rating: 4.9,
    reviews: 145,
    category: "Građevinski radovi",
    price: 3,
    bonus: "Popust na velike projekte",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

async function seedFirestore() {
  try {
    const servicesCollection = collection(db, 'services');
    
    for (const service of sampleServices) {
      await addDoc(servicesCollection, service);
      console.log(`Added service: ${service.name}`);
    }
    
    console.log('Successfully added all sample services!');
  } catch (error) {
    console.error('Error adding sample data:', error);
  }
}

seedFirestore(); 