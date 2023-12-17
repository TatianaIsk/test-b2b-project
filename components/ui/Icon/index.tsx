import clsx from 'clsx';

import s from './Icon.module.scss';

export type IconsVariants = 'whatsapp' | 'telegram' | 'wallet' | 'options' | 'prev1' | 'prev2' | 'prev3';

interface IconProps {
  name: IconsVariants;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => <div className={clsx(s.icon, s[name], className)}></div>;

export default Icon;
