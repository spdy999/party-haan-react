// import { RouteComponentProps } from 'react-router';
import PartyForm from './PartyForm';
import { useRegisterContext } from '../../../context/register/RegisterProvider';
import { useAppContext } from '../../../context/AppProvider';
import { useEffect } from 'react';
import { SET_APP_BAR_NAME } from '../../../context/action-types';
import Layout from '../../layout';
import Typography from '@material-ui/core/Typography';
import { Formik } from 'formik';
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
const CreateParty = (props: RouteComponentProps<any>) => {
  const { dispatch: appDispatch } = useAppContext();

  const { register } = useRegisterContext();
  const initialValues: MyFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
    accept: false,
  };

  useEffect(() => {
    appDispatch({
      type: SET_APP_BAR_NAME,
      payload: { appBarTitle: 'สร้างปาร์ตี้', lastPage: '/' },
    });
  }, [appDispatch]);
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
          <PartyForm
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

export default CreateParty;
