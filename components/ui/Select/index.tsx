import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

import clsx from 'clsx';

import Dropdown from './Dropdown';

import s from './Select.module.scss';

interface SelectProps {
  title: string;
  options?: string[];
  className?: string;
  name: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  count?: number[];
}

const Select: React.FC<SelectProps> = ({ options, className, name, disabled, onChange, title, count }) => {
  const { register } = useFormContext();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className={clsx(s.select, className, { [s.selectOpen]: isOpen })} {...register(name, { disabled })} onClick={handleOpenMenu}>
        <div className={s.selectedOption}>
          <p className={s.optionTitle}>{selectedOption || title}</p>
          <div className={clsx(s.arrowIcon, { [s.open]: isOpen })} />
        </div>
      </div>
      {isOpen && <Dropdown options={options} count={count} handleSelectOption={handleSelectOption} />}
    </>
  );
};

export default Select;
