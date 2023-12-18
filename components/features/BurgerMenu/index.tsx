'use client';
import { useState, useEffect, useRef } from 'react';

import BurgerIcon from './BurgerIcon';
import Menu from './Menu';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <BurgerIcon onClick={handleIconClick} isOpen={isOpen} />
      {isOpen && (
        <>
          <Menu />
        </>
      )}
    </div>
  );
};

export default BurgerMenu;