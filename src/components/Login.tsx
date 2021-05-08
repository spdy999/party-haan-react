import { Formik } from 'formik';
import Layout from './layout';
import LoginForm from './LoginForm';
import { useAppContext } from '../context/state';
import { useLoginContext } from '../context/login/LoginProvider';
import { RouteComponentProps } from 'react-router';

interface Values {
  email: string;
  password: string;
}

const Login = (props: RouteComponentProps<any>) => {
  const { message } = useAppContext();
  const { login } = useLoginContext();

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
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(values) => {
          const errors: Partial<Values> = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={async (values) => {
          try {
            await login(values);
            props.history.push('/');
          } catch (error) {
            console.log(error);
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
