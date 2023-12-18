import clsx from 'clsx';

import s from './BurgerIcon.module.scss';

interface BurgerIconProps {
  onClick: () => void;
  isOpen: boolean;
  className?: string;
}

const BurgerIcon: React.FC<BurgerIconProps> = ({ onClick, isOpen, className }) => {
  const handleIconClick = () => {
    onClick();
  };

  return (
    <button className={clsx(s.icon, isOpen && s.open, className)} onClick={handleIconClick} aria-label='Toggle Menu'>
      <div className={s.hamburgerBars}>
        <span className={s.bar}></span>
        <span className={s.bar}></span>
        <span className={s.bar}></span>
      </div>
    </button>
  );
};

export default BurgerIcon;