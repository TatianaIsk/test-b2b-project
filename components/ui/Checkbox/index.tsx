import { ComponentPropsWithRef } from 'react';
import { useFormContext } from 'react-hook-form';

import clsx from 'clsx';

import Label from '../Label';

import s from './Checkbox.module.scss';

interface CheckboxProps extends Omit<ComponentPropsWithRef<'input'>, 'value'> {
  label?: string;
  htmlFor?: string;
  count?: number;
  classNames?: {
    checkboxBlock?: string;
    checkbox?: string;
    checkmark?: string;
  };
  value?: boolean;
  name: string;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ classNames, label, count, value, htmlFor, disabled, name, ...props }) => {
  const { register } = useFormContext();

  return (
    <div className={clsx(s.checkboxBlock, classNames?.checkboxBlock)}>
      <label className={s.checkboxLabel}>
        <input type='checkbox' className={s.checkbox} {...props} checked={value} id={htmlFor} {...register(name, { disabled })} />
        <span className={clsx(s.checkmark, classNames?.checkmark)}></span>
        {label && <Label label={label} htmlFor={htmlFor} count={count} className={s.label} />}
      </label>
    </div>
  );
};

export default Checkbox;
