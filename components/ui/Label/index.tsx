import clsx from 'clsx';

import s from './Label.module.scss';

interface LabelProps {
  label?: string;
  count?: number;
  htmlFor?: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ label, count, htmlFor, className }) => (
  <label className={clsx(s.label, className)} htmlFor={htmlFor}>
    {label}
    {count && <span className={s.count}>{count}</span>}
  </label>
);

export default Label;
