import React, { useState } from 'react';

// firebase
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

import ChatList from './ChatList';
import Search from './Search';
import SearchList from './SearchList';

const ChatSearch = ({ isSearching }) => {
  const [username, setUsername] = useState(''); // only info user name
  const [user, setUser] = useState([]); // all info user
  const [err, setError] = useState(false);

  const handleSearch = async () => {
    // Create a reference to the users collection
    const usersRef = collection(db, 'users');
    // Create a query against the collection.
    // const q = query(usersRef, where('displayName', '<=', username));
    const q = query(usersRef);
    try {
      let arr = [];
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length === 0) return setError(true);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, ' => ', doc.data());
        arr.push(doc.data());
      });
      arr = arr.filter((value) => value.displayName.indexOf(username) != -1);
      setUser(arr);
    } catch (err) {
      setError(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter' && username != '') {
      setUser([]);
      setError(false);
      handleSearch();
    }
  };

  return (
    <>
      <Search
        username={username}
        setUsername={setUsername}
        setUser={setUser}
        onKeyDown={handleKeyDown}
      />
      <div className="relative flex flex-col flex-1 w-full">
        <ChatList />
        <SearchList
          isSearching={isSearching}
          setUser={setUser}
          setUsername={setUsername}
          users={user}
        />
      </div>
    </>
  );
};

export default ChatSearch;
