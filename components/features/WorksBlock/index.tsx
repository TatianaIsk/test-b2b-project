import { kitchen } from './data';
import WorkItem from './WorkItem';

import s from './WorksBlock.module.scss';

const WorksBlock = () => {
  return (
    <div className={s.container}>
      {kitchen.map(({img, title, subtitle, priceFirst, priceSecond, priceThird, length }) => (
        <WorkItem img={img} title={title} subtitle={subtitle} priceFirst={priceFirst} priceSecond={priceSecond} priceThird={priceThird} length={length} />
      ))}
    </div>
  );
};

export default WorksBlock;
