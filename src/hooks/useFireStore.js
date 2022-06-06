import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/firebase.config";

const useFireStore = (collection) => {
    const [docs, setDocs] = useState([]);
    
    useEffect(() => {
        const unsubscribe = projectFireStore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshot) => {
            let documents = [];
            snapshot.forEach(doc => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs(documents);
        });
        return () => unsubscribe();
    }, [collection]);
    return { docs };
}

export default useFireStore