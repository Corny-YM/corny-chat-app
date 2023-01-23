import React, { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const useListRoomsData = (roomId) => {
  const [roomInfo, setRoomInfo] = useState({});
  useEffect(() => {
    const ref = doc(db, 'rooms', roomId);
    const unsub = onSnapshot(ref, (doc) => {
      // snapshot.forEach((doc) => {
      //   console.log(doc.id + ' => ' + doc.data());
      // });
      setRoomInfo(doc.data());
    });

    return () => {
      unsub();
    };
  }, [roomId]);

  return { roomInfo };
};

export default useListRoomsData;
