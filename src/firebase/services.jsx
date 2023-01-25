import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from './config';
import moment from 'moment/moment';

// CHECK & GET
export const getUser = (uid) => {
  const ref = collection(db, 'users');
  const q = query(ref, where('uid', '==', uid));
  return getDocs(q);
};

export const isCreatedRoomFriend = (member) => {
  const ref = collection(db, 'rooms');
  const q = query(
    ref,
    where('chatType', '==', 'friend'),
    where('members', 'array-contains', member),
  );
  return getDocs(q);
};

// CREATE
export const createNewUser = (displayName, email, photoURL, uid) => {
  return setDoc(doc(db, 'users', uid), {
    displayName: displayName,
    email: email,
    photoURL: photoURL,
    uid: uid,
    rooms: [],
  });
};

export const createNewRoom = (roomName, members, chatType, avatar = '') => {
  return addDoc(collection(db, 'rooms'), {
    roomName: roomName,
    chatAvatar: avatar,
    chatType: chatType,
    members: members, // array [{name, img, uid, isAdmin}]
    lastTimeOnline: serverTimestamp(),
    lastMessage: '',
    emoji: { id: '+1', skin: 1 },
  });
};

export const addNewMessage = (roomId, currentUserUID, message) => {
  const ref = doc(db, 'messages', String(new Date().getTime()));
  return setDoc(ref, {
    roomId: roomId,
    senderId: currentUserUID,
    chatContent: message,
    time: serverTimestamp(),
    type: 'message',
    fileName: '',
    reactions: [],
  });
};

// UPDATE
export const updateUserRooms = (uid, roomId) => {
  return updateDoc(doc(db, 'users', uid), {
    rooms: arrayUnion(roomId),
  });
};
