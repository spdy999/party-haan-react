import { Formik } from 'formik';
import Layout from './layout';
import LoginForm from './LoginForm';
import { useAppContext } from '../context/state';
import { useLoginContext } from '../context/login/LoginProvider';
import { RouteComponentProps } from 'react-router';
import * as yup from 'yup';

interface Values {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

interface MyFormValues {
  email: string;
  password: string;
}

const Login = (props: RouteComponentProps<any>) => {
  const { message } = useAppContext();
  const { login } = useLoginContext();
  const initialValues: MyFormValues = {
    email: '',
    password: '',
  };
  return (
    <Layout>
      <div>{message}</div>
      <div style={{ margin: '0 0 40px 0' }}>
        <img
          src="/images/logo.png"
          className="App-logo"
          alt="logo"
          width={90}
          height={90}
        />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            await login(values);
            props.history.push('/');
          } catch (error) {
            alert('Wrong email or password');
          }
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <LoginForm submitForm={submitForm} isSubmitting={isSubmitting} />
        )}
      </Formik>
    </Layout>
  );
};

export default Login;
