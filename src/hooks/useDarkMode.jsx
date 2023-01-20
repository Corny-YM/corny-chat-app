import React, { useEffect, useState } from 'react';

const useDarkMode = () => {
  // Theme need to add to <html/>
  const [curTheme, setCurTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) ?? 'dark',
  );
  // Theme need to remove from <html/>
  const theme = curTheme == 'dark' ? 'light' : 'dark';

  // First time mounted => set key to localStorage
  useEffect(() => {
    const stgTheme = JSON.parse(localStorage.getItem('theme'));
    if (!stgTheme) {
      localStorage.setItem('theme', JSON.stringify('dark'));
    }
  }, []);

  useEffect(() => {
    const bodyElement = document.body;
    bodyElement.classList.add(curTheme);
    bodyElement.classList.remove(theme);
  }, [theme, curTheme]);

  return [theme, setCurTheme];
};

export default useDarkMode;
