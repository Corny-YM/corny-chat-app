import React from 'react';

const ImgMedia = () => {
  return (
    <div className="w-full max-w-[280px] md:max-w-sm mt-4 h-[320px] overflow-auto">
      <div className="flex flex-wrap gap-5 items-center">
        {/* Item */}
        <div className="flex-center w-20 h-20 rounded-xl overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://i.pravatar.cc/150?img=3"
          />
        </div>
        <div className="flex-center w-20 h-20 rounded-xl overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://i.pravatar.cc/150?img=3"
          />
        </div>
        <div className="flex-center w-20 h-20 rounded-xl overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://i.pravatar.cc/150?img=3"
          />
        </div>
        <div className="flex-center w-20 h-20 rounded-xl overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://i.pravatar.cc/150?img=3"
          />
        </div>
        <div className="flex-center w-20 h-20 rounded-xl overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://i.pravatar.cc/150?img=3"
          />
        </div>
      </div>
    </div>
  );
};

export default ImgMedia;
