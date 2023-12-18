import Link from 'next/link';

import carts from './../../../../assets/carts.svg';

import s from './Menu.module.scss';
import Button from './../../../ui/Button/index';
import Icon from '../../../ui/Icon';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className={s.wrapper}>
      <Image src={carts} alt='carts' />
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

export default Menu;
