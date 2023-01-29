import React from 'react';

import ModalsTemplate from '../ModalsTemplate';

const Img = ({ src = 'https://i.pravatar.cc/150?img=15' }) => {
  return (
    <ModalsTemplate showMedia={'all-media'}>
      <img className="w-[650px] mx-auto rounded-lg" src={src} />
    </ModalsTemplate>
  );
};

export default Img;
