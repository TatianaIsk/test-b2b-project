import Image from 'next/image';

import Banner from '../components/features/Banner';
import Header from '../components/features/Header';

import kitchen from './../assets/kitchen.svg';
import line from './../assets/line-dark-short.svg';

import s from './MainPage.module.scss';
import PrivilegesMenu from '../components/features/PrivilegesMenu';
import Title from '../components/ui/Title';
import Filters from '../components/features/Filters';

const MainPage = () => {
  return (
    <div className={s.container}>
      <section className={s.banner}>
        <Header />
        <Banner />
      </section>
      <section className={s.privilege}>
        <Image src={kitchen} alt='' className={s.img} />
        <PrivilegesMenu />
      </section>
      <section className={s.works}>
        <div className={s.title}>
          <Title title='Посмотрите наши работы' />
          <Image src={line} alt='' className={s.line} />
        </div>
        <Filters />
      </section>
    </div>
  );
};

export default MainPage;
