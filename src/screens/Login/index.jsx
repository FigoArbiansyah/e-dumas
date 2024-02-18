import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MegaphoneOnlyImage from '../../assets/images/meghaphone-only.png';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email tidak valid')
    .required('Email harus diisi!'),
  password: Yup.string()
    .required('Password harus diisi!'),
});

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {};
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES);

  return (
    <main className='min-h-svh pt-[6.5rem]'>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        enableReinitialize
        onSubmit={(values, formikBag) => {
          console.log('submit');
          formikBag.setSubmitting(true);
        }}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            setFieldValue,
            isValid, dirty, isSubmitting,
            resetForm,
            getFieldProps,
            setFieldError,
          } = formik;
          return (
            <div className='p-5'>
              <div
                className="mb-5 text-center"
                onClick={() => navigate('/')}
              >
                <img
                  src={MegaphoneOnlyImage}
                  alt="Megaphone"
                  style={{
                    width: 180,
                    display: 'inline-block',
                  }}
                />
              </div>
              <div className='mb-3'>
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  value={values?.email}
                  error={errors?.email}
                  helperText={errors?.email}
                  style={{
                    width: '100%',
                  }}
                  onChange={(e) => {
                    setFieldValue('email', e.target.value);
                  }}
                />
              </div>
              <div className='mb-3'>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  value={values?.password}
                  error={errors?.password}
                  helperText={errors?.password}
                  style={{
                    width: '100%',
                  }}
                  onChange={(e) => {
                    setFieldValue('password', e.target.value);
                  }}
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  // color='inherit'
                  onClick={() => handleLogin()}
                  disabled={isSubmitting || !(dirty && isValid)}
                  className='font-poppins'
                  style={{
                    fontWeight: 500,
                    fontFamily: 'Poppins, sans-serif',
                    // backgroundColor: 'rgb(56 189 248)',
                    // color: 'white',
                    width: '100%',
                  }}
                >Login</Button>
              </div>
            </div>
          );
        }}
      </Formik>
    </main>
  );
};

export default memo(Login);
