import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ModalsTemplate from './ModalsTemplate';

const arrayMember = [
  {
    photoURL: 'https://i.pravatar.cc/150?img=3',
    id: 1,
  },
  {
    photoURL: 'https://i.pravatar.cc/150?img=7',
    id: 2,
  },
  {
    photoURL: 'https://i.pravatar.cc/150?img=10',
    id: 3,
  },
];

const AddGroupChatModal = () => {
  const [members, setMembers] = useState(arrayMember);
  const [friendIdInput, setFriendIdInput] = useState('');

  const handleRemoveMember = (id) => {
    const newArrMember = [...members];
    newArrMember.splice(id, 1);
    setMembers(newArrMember);
  };

  const handleAddMember = (valueInput) => {
    if (valueInput === '') return;
    const newArrMember = [...members];
    newArrMember.push({
      photoURL: 'https://i.pravatar.cc/150?img=17',
      id: valueInput,
    });
    setMembers(newArrMember);
  };

  return (
    <ModalsTemplate>
      <div className="flex-center bg-lightMode dark:bg-darkMode rounded-lg px-3 py-5">
        <form className="py-3 px-5">
          <div className="flex flex-col mb-5">
            <div className="font-bold mb-2">Name Group: </div>
            <input
              className="input-styled-chat rounded-xl px-4 py-2"
              placeholder="Room name..."
            />
          </div>
          <div className="flex flex-col mb-5">
            <div className="font-bold mb-2">Member ID: </div>
            <div className="flex-center justify-start gap-2">
              <input
                value={friendIdInput}
                onChange={(e) => setFriendIdInput(e.target.value)}
                className="input-styled-chat rounded-xl px-4 py-2"
                placeholder="Friend ID..."
              />
              <div
                onClick={() => handleAddMember(friendIdInput)}
                className="modal-btn bg-emerald-600"
              >
                Add
              </div>
            </div>
          </div>

          {/* List member */}
          <ul className="max-w-[350px] md:max-w-[450px] lg:max-w-[600px] flex items-center flex-wrap gap-2">
            {members.map((member, index) => (
              <li key={member.id} className="w-12 aspect-square relative">
                <img className="rounded-full" src={member?.photoURL} />
                {index != 0 && (
                  <div
                    onClick={() => handleRemoveMember(index)}
                    className="flex-center absolute -top-1 -right-1 p-0.5 bg-gray-500 text-sm rounded-full cursor-pointer"
                  >
                    <FontAwesomeIcon className="text-xl" icon={faXmarkCircle} />
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Options Control */}
          <div className="flex-center justify-end mt-10 gap-4">
            <div className="modal-btn bg-cyan-600 min-w-full">Create</div>
          </div>
        </form>
      </div>
    </ModalsTemplate>
  );
};

export default AddGroupChatModal;
