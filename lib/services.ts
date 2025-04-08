import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';
import { Service } from '../types/firestore';

export const getHighlightedServices = async (): Promise<Service[]> => {
  try {
    const servicesRef = collection(db, 'services');
    const q = query(servicesRef, orderBy('rating', 'desc'), limit(6));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate(),
    })) as Service[];
  } catch (error) {
    console.error('Error fetching highlighted services:', error);
    return [];
  }
};

export const getServices = async (): Promise<Service[]> => {
  try {
    const servicesRef = collection(db, 'services');
    const q = query(servicesRef, orderBy('rating', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate(),
    })) as Service[];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}; 