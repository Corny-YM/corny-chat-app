import React, { useEffect, useState } from 'react';
import {
  collection,
  doc,
  documentId,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/config';

const useListRoomsData = (roomId) => {
  const [roomInfo, setRoomInfo] = useState({});
  useEffect(() => {
    const roomsRef = collection(db, 'rooms');
    const q = query(roomsRef, where(documentId(), '==', roomId));
    const unsub = onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => setRoomInfo(doc.data()));
    });

    return () => {
      unsub();
    };
  }, [roomId]);

  return { roomInfo };
};

export default useListRoomsData;
