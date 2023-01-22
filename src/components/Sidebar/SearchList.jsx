import React from 'react';

const SearchList = ({ users }) => {
  return (
    <div className="h-auto flex flex-col flex-1 mt-3">
      {users.map((user) => (
        <div
          key={user.uid}
          className="flex-center justify-start relative pt-2 group"
        >
          <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hoverLightMode dark:hover:bg-hover">
            <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
              <img className="object-cover" src={user?.photoURL} />
            </div>
            <div className="flex flex-col flex-1">
              <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                {user?.displayName}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
