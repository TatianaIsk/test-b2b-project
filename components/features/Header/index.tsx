import Image from 'next/image';

import logo from './../../../assets/logo.svg';
import carts from './../../../assets/carts.svg';

import s from './Header.module.scss';
import Icon from '../../ui/Icon';
import Button from '../../ui/Button';

const Header = () => {
  return (
    <div className={s.container}>
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
    </div>
  );
};

export default Header;
