import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Collapse } from 'react-collapse';

import { showModalImgShared } from '../../../reducers/actions';

const SPcontent = ({ show }) => {
  const dispatch = useDispatch();

  const handleClick = (src) => {
    dispatch(
      showModalImgShared({
        modalName: 'img-shared',
        src: src,
      }),
    );
  };

  return (
    <Collapse isOpened={show} checkTimeout={0}>
      <div className="flex justify-evenly flex-wrap m-2">
        <div className="flex-center mb-2 px-2">
          <img
            onClick={() => handleClick('https://i.pravatar.cc/150?img=4')}
            className="flex-center img-shared"
            src="https://i.pravatar.cc/150?img=4"
          />
        </div>
        <div className="flex-center mb-2 px-2">
          <img
            onClick={() => handleClick('https://i.pravatar.cc/150?img=5')}
            className="flex-center img-shared"
            src="https://i.pravatar.cc/150?img=5"
          />
        </div>
        <div className="flex-center mb-2 px-2">
          <img
            onClick={() => handleClick('https://i.pravatar.cc/150?img=7')}
            className="flex-center img-shared"
            src="https://i.pravatar.cc/150?img=7"
          />
        </div>
      </div>
    </Collapse>
  );
};

export default SPcontent;
