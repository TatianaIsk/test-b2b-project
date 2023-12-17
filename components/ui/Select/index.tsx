import { useFormContext } from 'react-hook-form';

import Image from 'next/image';
import clsx from 'clsx';

import arrowClose from './../../../assets/select/arrow-close.svg'

import s from './Select.module.scss';

interface SelectProps {
  title: string;
  options?: string[];
  className?: string;
  name: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, className, name, disabled, onChange, title }) => {
  const { register } = useFormContext();

  return (
    <select className={clsx(s.select, className)} onChange={e => onChange?.(e.target.value)} {...register(name, { disabled })}>
      <option value=''>
        {title}
      </option>
      {options &&
        options.map((option, index) => (
          <option key={index} value={options} className={s.option}>
            {option}
          </option>
        ))}
    </select>
  );
};

export default Select;
