import { FC, forwardRef, Ref, InputHTMLAttributes } from 'react';
import classNames from 'classnames'; 
import styles from './styles.module.scss';

interface InputItemProps extends InputHTMLAttributes<HTMLInputElement> {
  inputId: string;
  inputType: string;
  inputLabel: string;
  placeholder: string;
  errors?: {
    message: string;
  } | undefined;
};

export const InputItem: FC<InputItemProps> = forwardRef((
  {
    inputId,
    inputType,
    inputLabel,
    errors,
    placeholder,
    ...props
  },
  ref: Ref<HTMLInputElement>
) => (
  <div className={styles.input_container}>
    <label
      htmlFor={inputId}
      className={styles.input_label}
    >
      {inputLabel}
    </label>
    <input
      ref={ref}
      id={inputId}
      type={inputType}
      className={classNames(styles.input_item, {[styles.input_item__error]: errors})}
      {...props}
    />
    {errors ? (
      <span className={styles.input_error}>{errors.message}</span>
    ) : (
      <span className={styles.input_placeholder}>{placeholder}</span>
    )}
  </div>
));
