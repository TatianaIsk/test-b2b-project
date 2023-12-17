import React, { PropsWithChildren } from 'react';

import Icon from '../../../ui/Icon';
import { PrivelegeType } from '../types';

import s from './Privilege.module.scss';

type PrivilegeProps = PropsWithChildren<PrivelegeType>;

const Privilege: React.FC<PrivilegeProps> = ({ icon, children }) => {
  return (
    <div className={s.container}>
      <Icon name={icon} />
      <p className={s.text}>{children}</p>
    </div>
  );
};

export default Privilege;
