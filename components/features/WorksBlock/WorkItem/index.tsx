import Image, { StaticImageData } from 'next/image';
import Button from '../../../ui/Button';
import Title from '../../../ui/Title';
import PricingOptions from '../PricingOptions';
import s from './WorkItem.module.scss';

interface WorkItemProps {
  img?: StaticImageData;
  title: string;
  subtitle: string;
  priceFirst: string;
  priceSecond: string;
  priceThird: string;
  length: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ img, title, subtitle, priceFirst, priceSecond, priceThird, length }) => {
  return (
    <div className={s.container}>
			<Image src={img} alt='' className={s.img}/>
      <Title title={title} className={s.title} />
      <p className={s.subtitle}>{subtitle}</p>
      <PricingOptions priceFirst={priceFirst} priceSecond={priceSecond} priceThird={priceThird}/>
      <p className={s.length}><span className={s.bold}>Длина кухни:</span> {length}</p>
      <div className={s.btns}>
        <Button>подробнее</Button>
        <Button className={s.btn}>расчет стоимости</Button>
      </div>
    </div>
  );
};

export default WorkItem;
