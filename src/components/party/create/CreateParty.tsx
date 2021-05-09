// import { RouteComponentProps } from 'react-router';
import { usePartyContext } from '../../../context/party/PartyProvider';
import PartyForm from './PartyForm';
import { useAppContext } from '../../../context/AppProvider';
import { useEffect } from 'react';
import { SET_APP_BAR_NAME } from '../../../context/action-types';
import Layout from '../../layout';
import Typography from '@material-ui/core/Typography';
import { Formik } from 'formik';
import * as yup from 'yup';
import { RouteComponentProps } from 'react-router';

interface MyFormValues {
  name: string;
  capacity: number;
  imgUrl: string;
}

export interface IPartyFormProps {
  // isSubmitting: boolean;
  submitForm: () => void;
  values: MyFormValues;
}

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  capacity: yup.number().required('Capacity is required').positive().integer(),
  imgUrl: yup.string(),
});
const CreateParty = (props: RouteComponentProps<any>) => {
  const { dispatch: appDispatch } = useAppContext();

  const { createParty } = usePartyContext();
  const initialValues: MyFormValues = {
    name: '',
    capacity: 1,
    imgUrl: '',
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
            await createParty(values);
            props.history.push('/');
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ submitForm, values }: IPartyFormProps) => (
          <PartyForm
            submitForm={submitForm}
            // isSubmitting={isSubmitting}
            values={values}
          />
        )}
      </Formik>
    </Layout>
  );
};

export default CreateParty;
