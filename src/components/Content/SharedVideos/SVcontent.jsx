import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from 'react-collapse';

import { showModalVidShared } from '../../../reducers/actions';
import Vid from '../../Modals/Shared/Vid';

const SVcontent = ({ data, show }) => {
  const { modalName, src } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = (src) => {
    dispatch(
      showModalVidShared({
        modalName: 'vid-shared',
        src: src,
      }),
    );
  };

  return (
    <>
      <Collapse isOpened={show} checkTimeout={0}>
        <div className="flex justify-evenly flex-wrap m-2">
          {data.length > 0 ? (
            data.map((value) => (
              <div key={value.id} className="relative flex-center mb-2 px-2">
                <video className="video-shared" src={value?.chatContent} />
                <div
                  onClick={() => handleClick(value?.chatContent)}
                  className="absolute inset-0 bg-[rgba(0,0,0,0.5)] text-white text-5xl flex-center rounded-xl cursor-pointer"
                >
                  <FontAwesomeIcon icon={faCirclePlay} />
                </div>
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

      {modalName == 'vid-shared' && <Vid src={src} />}
    </>
  );
};

export default SVcontent;
