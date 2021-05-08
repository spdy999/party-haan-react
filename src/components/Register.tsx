import { Formik } from 'formik';
import Layout from './layout';
import RegisterForm from './RegisterForm';
import { useRegisterContext } from '../context/register/RegisterProvider';
import { Typography } from '@material-ui/core';
import * as yup from 'yup';
import { RouteComponentProps } from 'react-router';

interface MyFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  accept: boolean;
}

interface IErrors {
  email: string;
  password: string;
  confirmPassword: string;
  accept: string;
}
export interface IRegisterFormProps {
  isSubmitting: boolean;
  submitForm: () => void;
  values: MyFormValues;
  errors: IErrors;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string().required('Confirm password is required'),
  accept: yup.boolean().oneOf([true], 'Accept is required'),
});

const Register = (props: RouteComponentProps<any>) => {
  const { register } = useRegisterContext();
  const initialValues: MyFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
    accept: false,
  };
  return (
    <Layout>
      <Typography variant="h6">สร้างบัญชีผู้ใช้</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            await register(values);
            props.history.push('/');
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ submitForm, isSubmitting, values, errors }: IRegisterFormProps) => (
          <RegisterForm
            submitForm={submitForm}
            isSubmitting={isSubmitting}
            values={values}
            errors={errors}
          />
        )}
      </Formik>
    </Layout>
  );
};
export default Register;
