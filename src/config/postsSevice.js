import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';

const addPost = async (post) => {
  const postsCollection = collection(db, 'posts');
  return await addDoc(postsCollection, post);
};

const getPosts = async () => {
  const postsCollection = collection(db, 'posts');
  const response = await getDocs(postsCollection);
  return response.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .sort((a, b) => b.createdAt - a.createdAt);
};

export { addPost, getPosts };
