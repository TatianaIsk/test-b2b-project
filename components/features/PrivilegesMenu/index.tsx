import Image from 'next/image';

import Title from '../../ui/Title';
import Privilege from './Privilege';

import line from './../../../assets/line-dark.svg';

import s from './PrivilegesMenu.module.scss';

const PrivilegesMenu = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <Title title='Наши преимущества' />
        <Image src={line} alt='' />
      </div>
      <div className={s.options}>
        <Privilege icon='prev1'><span className={s.bold}>C 2000 г на рынке</span> наши кухни выбрали 10 000+ семей</Privilege>
        <Privilege icon='prev2'><span className={s.bold}>Сжатые сроки</span> изготовление кухни от 20 дней</Privilege>
        <Privilege icon='prev3'><span className={s.bold}>Дизайн проект</span> бесплатно за 30 минут</Privilege>
      </div>
    </div>
  );
};

export default PrivilegesMenu;
