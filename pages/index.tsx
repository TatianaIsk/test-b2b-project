import Image from 'next/image';

import Banner from '../components/features/Banner';
import Header from '../components/features/Header';

import kitchen from './../assets/kitchen.svg';

import s from './MainPage.module.scss';
import PrivilegesMenu from '../components/features/PrivilegesMenu';

const MainPage = () => {
  return (
    <div className={s.container}>
      <div className={s.banner}>
        <Header />
        <Banner />
      </div>
      <div className={s.privilege}>
        <Image src={kitchen} alt='' className={s.img} />
        <PrivilegesMenu />
      </div>
    </div>
  );
};

export default MainPage;
