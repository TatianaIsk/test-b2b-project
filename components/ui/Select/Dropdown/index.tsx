import Checkbox from '../../Checkbox';
import s from './Dropdown.module.scss';

interface DropdownProps {
  options?: string[];
  count?: number[];
  handleSelectOption: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, handleSelectOption, count }) => {
  return (
    <div className={s.options}>
      {options &&
        options.map((option, index) => (
          <div key={index} className={s.option} onClick={() => handleSelectOption(option)}>
            <Checkbox name={option} label={option} count={count && count[index]} />
          </div>
        ))}
    </div>
  );
};

export default Dropdown;
