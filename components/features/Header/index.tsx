'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import logo from './../../../assets/logo.svg';
import carts from './../../../assets/carts.svg';

import s from './Header.module.scss';
import Icon from '../../ui/Icon';
import Button from '../../ui/Button';
import BurgerMenu from '../BurgerMenu';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState<number>(1000);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 769px)');

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setWindowWidth(e.matches ? window.innerWidth : 0);
    };
    setWindowWidth(mediaQuery.matches ? window.innerWidth : 0);

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <header className={s.container}>
      {windowWidth >= 769 ? (
        <>
          <div className={s.logo}>
            <Image src={logo} alt='logo' />
            <Image src={carts} alt='carts' />
          </div>
          <div className={s.contacts}>
            <div className={s.map}>
              <p>Производство кухонь на заказ</p>
              <p>Анапа, ул. Крылова, д. 27</p>
            </div>
            <div className={s.media}>
              <Icon name='whatsapp' />
              <Icon name='telegram' />
            </div>
            <p className={s.number}>+7 (988)-311-77-88</p>
            <Button>заказать звонок</Button>
          </div>
        </>
      ) : (
        <>
          <div className={s.logo}>
            <Image src={logo} alt='logo' />
          </div>
          <BurgerMenu/>
        </>
      )}
    </header>
  );
};

export default Header;
