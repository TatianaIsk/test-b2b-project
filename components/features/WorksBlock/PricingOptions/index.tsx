import s from './PricingOptions.module.scss';

interface PricingOptionsProps {
  priceFirst: string;
  priceSecond: string;
  priceThird: string;
}

const PricingOptions: React.FC<PricingOptionsProps> = ({ priceFirst, priceSecond, priceThird }) => {
  return (
    <div className={s.options}>
      <div className={s.optionsFirst}>
        <p>Эконом</p>
        <p>{priceFirst}</p>
      </div>
      <div className={s.optionsSecond}>
        <p>Стандарт</p>
        <p>{priceSecond}</p>
      </div>
      <div className={s.optionsThird}>
        <p>Премиум</p>
        <p>{priceThird}</p>
      </div>
    </div>
  );
};

export default PricingOptions;
