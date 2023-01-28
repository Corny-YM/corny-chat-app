import { useState, useEffect } from 'react';
import {
  collection,
  query,
  where,
  limit,
  orderBy,
  onSnapshot,
} from '@firebase/firestore';
import { db } from '../firebase/config';

function useSharedData(roomId, type, amount) {
  const [media, setMedia] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      where('type', '==', type),
      where('chatContent', '!=', ''),
      where('roomId', '==', roomId),
      orderBy('chatContent', 'desc'),
      limit(amount),
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const listMedia = [];
      if (snapshot.size) {
        snapshot.forEach((doc) => {
          listMedia.push({ ...doc.data(), id: doc.id });
        });
      }
      setMedia(listMedia);
    });

    return () => {
      unsub();
    };
  }, [roomId, type]);

  return media;
}

export default useSharedData;
