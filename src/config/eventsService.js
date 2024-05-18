import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';

const addEvent = async (event) => {
  const eventsCollection = collection(db, 'events');
  return await addDoc(eventsCollection, event);
};

const getEvents = async () => {
  const eventsCollection = collection(db, 'events');
  const response = await getDocs(eventsCollection);
  return response.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .sort((a, b) => b.createdAt - a.createdAt);
};

export { addEvent, getEvents };
