import React from 'react';
import NavOptions from './NavOptions';

const Nav = () => {
  console.log('re-render');

  return (
    <header className="flex-center justify-between my-2">
      <span className="font-rubikWet font-bold text-xl sm:text-2xl md:text-3xl text-main-color select-none">
        CornyChat
      </span>

      {/* Options control */}
      <NavOptions />
    </header>
  );
};

export default Nav;
