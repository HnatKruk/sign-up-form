import { FC, InputHTMLAttributes, Ref, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface SelectOption {
  code: string;
  name: string;
};

interface SelectItemProps extends InputHTMLAttributes<HTMLInputElement> {
  selectId: string;
  selectLabel: string;
  placeholder: string;
  errors?: {
    message: string;
  } | undefined;
  disabled: boolean;
  options: SelectOption[] | undefined,
};

export const SelectItem: FC<SelectItemProps> = forwardRef((
  {
    selectId,
    selectLabel,
    errors,
    placeholder,
    disabled,
    options,
    ...props
  },
  ref: Ref<HTMLInputElement>
) => {
  return ( 
    <div className={styles.input_container}>
      <label
        htmlFor={selectId}
        className={styles.input_label}
      >
        {selectLabel}
      </label>
      <select
        ref={ref}
        id={selectId}
        disabled={disabled}
        defaultValue=''
        className={classNames(styles.input_item, {[styles.input_item__error]: errors})}
        {...props}
      >
        <option value='' disabled hidden>Select an option</option>
        {options?.map((option) => <option 
          value={option.code}
          key={option.code}
        >
          {option.name}
        </option>)}
      </select>
      {errors
        ? <span className={styles.input_error}>{errors.message}</span>
        : <span className={styles.input_placeholder}>{placeholder}</span>
      }
    </div>
  );
});
