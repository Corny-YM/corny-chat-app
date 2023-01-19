import React from 'react';

import ModalsTemplate from '../ModalsTemplate';

const Img = ({ src = 'https://i.pravatar.cc/150?img=15' }) => {
  return (
    <ModalsTemplate>
      <img
        className="w-full md:w-auto md:h-full mx-auto rounded-lg"
        src={src}
      />
    </ModalsTemplate>
  );
};

export default Img;
