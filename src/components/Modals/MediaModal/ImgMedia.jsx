import React from 'react';
import { useDispatch } from 'react-redux';
import { showModalImgShared } from '../../../reducers/actions';

const ImgMedia = ({ data }) => {
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
    <div className="w-full max-w-[280px] md:max-w-sm mt-4 h-[320px] overflow-auto">
      <div className="flex flex-wrap gap-5 items-center">
        {/* Item */}
        {data.map((value) => (
          <div
            key={value?.id}
            className="flex-center w-20 h-20 rounded-xl overflow-hidden cursor-pointer"
            onClick={() => handleClick(value?.chatContent)}
          >
            <img
              className="object-cover w-full h-full"
              src={value?.chatContent}
              alt={value?.fileName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgMedia;
