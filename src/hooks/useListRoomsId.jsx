import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, where } from '@firebase/firestore';
import { db } from '../firebase/config';

function useListRoomsId(uid) {
  const [listRoomsId, setListRoomsId] = useState([]);
  const [userDocId, setUserDocId] = useState('');

  useEffect(() => {
    const ref = collection(db, 'users');
    const q = query(ref, where('uid', '==', uid));
    const unsub = onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        setUserDocId(doc.id);
        setListRoomsId(doc.data().rooms);
      });
    });

    return () => {
      unsub();
    };
  }, [uid]);

  return { listRoomsId, userDocId };
}

export default useListRoomsId;
