import {useState, useEffect} from 'react';
import { projectFireStore, projectStorage, timestamp  } from '../firebase/firebase.config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    useEffect(() => {
        if (!file) {
            setProgress(0);
            return;
        }
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFireStore.collection('images');
        
        const uploadTask = storageRef.put(file);
        uploadTask.on('state_changed', snapshot => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
        }, error => {
            setError(error);
        }
        , async() => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url, createdAt});
        }
        );
    }, [file]);
    return { progress, url, error };    
}

export default useStorage