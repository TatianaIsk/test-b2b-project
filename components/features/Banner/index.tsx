import Image from 'next/image';

import Button from '../../ui/Button';
import Icon from '../../ui/Icon';

import line from './../../../assets/line.svg';
import arrow from './../../../assets/arrow.svg';

import s from './Banner.module.scss';
import Option from '../Option';

const Banner = () => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Изготовим роскошную дизайнерскую кухню</h3>
      <Image src={line} alt='' className={s.line} />
      <div className={s.wallet}>
        <Icon name='wallet' />
        <p className={s.text}>
          <span className={s.bold}>Цена на 12-24% ниже,</span> чем у посредников
        </p>
      </div>
      <div className={s.price}>
        <p>Рассчитаем стоимость кухни-мечты</p>
        <Image src={arrow} alt='' className={s.arrow} />
        <Button className={s.btn}>Заказать расчёт</Button>
      </div>
      <Option className={s.optionFirst}>Огромный выбор бытовой техники</Option>
      <Option className={s.optionSecond}>Изысканный гарнитур любого размера</Option>
      <Option className={s.optionThird}>Выдающиеся сорта древесины</Option>
    </div>
  );
};

export default Banner;
