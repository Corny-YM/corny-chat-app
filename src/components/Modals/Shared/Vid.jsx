import React from 'react';

import ModalsTemplate from '../ModalsTemplate';

const Vid = ({
  src = 'https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/videos%2F313254144_855351012271789_8452105458587557840_n.mp4?alt=media&token=dd3e3360-dd7b-42e5-b471-209b607c81e5',
}) => {
  return (
    <ModalsTemplate>
      <video
        className="w-full md:w-auto md:h-full mx-auto rounded-lg"
        controls
        autoPlay
        src={src}
      />
    </ModalsTemplate>
  );
};

export default Vid;
