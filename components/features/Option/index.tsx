import { PropsWithChildren } from 'react';

import clsx from 'clsx';

import Icon from '../../ui/Icon';

import s from './Option.module.scss';

interface OptionProps extends PropsWithChildren {
  className?: string;
}

const Option: React.FC<OptionProps> = ({ children, className }) => {
  return (
    <div className={clsx(s.container, className)}>
      <p className={s.text}>{children}</p>
      <Icon name='options' className={s.icon} />
    </div>
  );
};

export default Option;
