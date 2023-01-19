import React, { useContext } from 'react';

import { AppContext } from '../../context/AppProvider';
import NavOptions from './NavOptions';

const Nav = () => {
  const { topicTheme } = useContext(AppContext);

  return (
    <header className="flex-center justify-between my-2">
      <span
        className="font-rubikWet font-bold text-xl sm:text-2xl md:text-3xl select-none"
        style={{ color: topicTheme }}
      >
        CornyChat
      </span>

      {/* Options control */}
      <NavOptions />
    </header>
  );
};

export default Nav;
