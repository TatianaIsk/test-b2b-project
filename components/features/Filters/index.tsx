import { FormProvider, useForm } from 'react-hook-form';

import { layout } from './data';

import Select from '../../ui/Select';
import Button from '../../ui/Button';

import s from './Filters.module.scss';

const Filters = () => {
  return (
    <FormProvider {...useForm()}>
      <div className={s.container}>
        <div className={s.filters}>
          <Select
            name='layout'
            title='планировка'
            options={layout.map(({ name }) => name)}
            count={layout.map(({count}) => count)}
          />
          <Select name='layout' title='стиль кухни' />
          <Select name='layout' title='цвет' />
        </div>
        <div className={s.btns}>
          <Button className={s.btnApply}>применить</Button>
          <Button className={s.btnReset}>сбросить</Button>
        </div>
      </div>
    </FormProvider>
  );
};

export default Filters;
