import { FC, forwardRef, Ref, InputHTMLAttributes } from 'react';
import classNames from 'classnames'; 
import styles from './styles.module.scss';

interface CheckboxItemProps extends InputHTMLAttributes<HTMLInputElement> {
  inputId: string;
  inputLabel: string;
};

export const CheckboxItem: FC<CheckboxItemProps> = forwardRef((
  {
    inputId,
    inputLabel,
    ...props
  },
  ref: Ref<HTMLInputElement>
) => (
  <div className={styles.checkbox_container}>
    <label
      htmlFor={inputId}
      className={styles.checkbox_label}
    >
      <input
        ref={ref}
        type="checkbox"
        id={inputId}
        className={classNames(styles.checkbox_item)}
        {...props}
      />
      <span className={classNames(styles.checkbox_slider)}></span>
      {inputLabel}
    </label>
  </div>
));
