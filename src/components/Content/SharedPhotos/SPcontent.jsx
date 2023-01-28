import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Collapse } from 'react-collapse';

import { showModalImgShared } from '../../../reducers/actions';

const SPcontent = ({ data, show }) => {
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
        {data.length > 0 ? (
          data.map((value) => (
            <div
              key={value?.id}
              className="flex-center w-20 h-20 mb-2 mx-2 overflow-hidden"
            >
              <img
                onClick={() => handleClick(value?.chatContent)}
                className="flex-center w-full h-full object-cover img-shared"
                src={value?.chatContent}
                alt={value?.fileName}
              />
            </div>
          ))
        ) : (
          <div className="flex-center overflow-hidden">
            <i className="font-bold text-red-700">
              Don't have anything share yet!
            </i>
          </div>
        )}
      </div>
    </Collapse>
  );
};

export default SPcontent;
