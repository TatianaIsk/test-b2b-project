import { useRef } from 'react';
import Image from 'next/image';

import { motion, useInView } from 'framer-motion';
import { container, item } from '../../../constants/animation';

import Title from '../../ui/Title';
import Privilege from './Privilege';

import line from './../../../assets/line-dark.svg';

import s from './PrivilegesMenu.module.scss';

const PrivilegesMenu = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div className={s.container} variants={container} initial='hidden' animate={inView ? 'visible' : 'hidden'} ref={ref}>
      <div className={s.title}>
        <Title title='Наши преимущества' />
        <Image src={line} alt='' className={s.img} />
      </div>
      <motion.div className={s.options} variants={container}>
        <motion.div className={s.item} variants={item}>
          <Privilege icon='prev1'>
            <span className={s.bold}>C 2000 г на рынке</span> наши кухни выбрали 10 000+ семей
          </Privilege>
        </motion.div>
        <motion.div className={s.item} variants={item}>
          <Privilege icon='prev2'>
            <span className={s.bold}>Сжатые сроки</span> изготовление кухни от 20 дней
          </Privilege>
        </motion.div>
        <motion.div className={s.item} variants={item}>
          <Privilege icon='prev3'>
            <span className={s.bold}>Дизайн проект</span> бесплатно за 30 минут
          </Privilege>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PrivilegesMenu;
