import Banner from '../components/features/Banner';
import Header from '../components/features/Header';

import s from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={s.container}>
      <div className={s.banner}>
        <Header />
        <Banner />
      </div>
    </div>
  );
};

export default MainPage;
