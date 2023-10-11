import { FC, InputHTMLAttributes, Ref, forwardRef } from 'react';
import styles from './styles.module.scss';

interface RadioItemProps extends InputHTMLAttributes<HTMLInputElement> {
  radioId: string;
  radioLabel: string;
  radioValue: string;
  checked?: boolean;
};

export const RadioItem: FC<RadioItemProps> = forwardRef((
  {
    radioId,
    radioLabel,
    radioValue,
    checked,
    ...props
  },
  ref: Ref<HTMLInputElement>
) => (
  <label
    htmlFor={radioId}
    className={styles.radio_container}
  >
    {radioLabel}
    <input
      ref={ref}
      type="radio"
      defaultChecked={checked}
      value={radioValue}
      id={radioId}
      className={styles.radio_item}
      {...props}
    />
    <span className={styles.radio_checkmark}></span>
  </label>
));
