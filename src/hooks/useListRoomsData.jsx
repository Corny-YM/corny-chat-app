import React, { useEffect, useState } from 'react';
import {
  collection,
  doc,
  documentId,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/config';

const useListRoomsData = (roomId) => {
  const [roomInfo, setRoomInfo] = useState({});
  useEffect(() => {
    const roomsRef = collection(db, 'rooms');
    const q = query(
      roomsRef,
      where(documentId(), '==', roomId),
      // orderBy('lastTimeOnline'),
    );
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
