import { Dispatch, FC, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/schema';
import { COUNTRIES } from '../../ mocks/countries';
import { CheckboxItem, InputItem, RadioItem, SelectItem } from '..';
import styles from './styles.module.scss';
import { TableDataInterface } from '../../utils/interfaces';

interface FormProps {
  setIsFormData: Dispatch<SetStateAction<TableDataInterface>>;
}

export const Form: FC<FormProps> = ({ setIsFormData }) => {
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    setIsFormData(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <InputItem
        inputId={'usernameId'}
        inputType={'text'}
        inputLabel={'Username*'}
        errors={errors.username}
        placeholder={'Your username is between 2 and 20 characters'}
        {...register('username')}
      />
      <InputItem
        inputId={'emailId'}
        inputType={'text'}
        inputLabel={'Email*'}
        errors={errors.email}
        placeholder={'Your email should be valid'}
        {...register('email')}
      />
      <InputItem
        inputId={'phoneId'}
        inputType={'text'}
        inputLabel={'Phone'}
        errors={errors.phone}
        placeholder={'Your phone should be valid'}
        {...register('phone')}
      />

      <div className={styles.radioItems_container}>
        <p className={styles.radioItems_label}>Select the desired type of communication</p>
        <RadioItem
          radioId={'radioEmailId'}
          radioLabel={'Email'}
          radioValue={'email'}
          {...register('communication')}
        />
        <RadioItem
          radioId={'radioPhoneId'}
          radioLabel={'Phone'}
          radioValue={'phone'}
          {...register('communication')}
        />
        <RadioItem
          radioId={'radioNoId'}
          radioLabel={'No'}
          radioValue={'no'}
          checked={true}
          {...register('communication')}
        />
      </div>

      <InputItem
        inputId={'passwordId'}
        inputType={'password'}
        inputLabel={'Password*'}
        errors={errors.password}
        placeholder={'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'}
        {...register('password')}
      />
      <InputItem
        inputId={'confirmPasswordId'}
        inputType={'password'}
        inputLabel={'Confirm password*'}
        errors={errors.confirmPassword}
        placeholder={'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'}
        {...register('confirmPassword')}
      />
      <CheckboxItem
        inputId={'addCountry'}
        inputLabel={'Add your address'}
        {...register('addCountry')}
      />

      {watch('addCountry') && (
        <>
          <SelectItem
            selectId={'countryId'}
            selectLabel={'Select your country*'}
            errors={errors?.country}
            placeholder={'Your country must be selected'}
            options={COUNTRIES}
            {...register('country', { shouldUnregister: true })}
          />
          <SelectItem
            selectId={'cityId'}
            selectLabel={'Select your city*'}
            errors={errors?.city}
            placeholder={'Your city must be selected'}
            disabled={!watch('country')}
            options={COUNTRIES
              .find((country) => country.code === watch('country'))
              ?.countryCities
            }
            {...register('city', { shouldUnregister: true }) }
          />
        </>
      )}
      <CheckboxItem
        inputId={'rememberMe'}
        inputLabel={'Remember me'}
        {...register('rememberMe')}
      />
      <div className={styles.handlers_container}>
        <button 
          type="reset"
          className={styles.handler_button}
          onClick={() => reset()}
        >
          Reset
        </button>
        <button
          type="submit"
          className={classNames(styles.handler_button, styles.primaryButton)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
