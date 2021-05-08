import { Form, Field } from 'formik';
import { Button, FormHelperText, LinearProgress } from '@material-ui/core';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';
import { IRegisterFormProps } from './Register';

export default function RegisterForm({
  isSubmitting,
  submitForm,
  errors,
}: IRegisterFormProps) {
  return (
    <Form>
      <Field component={TextField} name="email" type="email" label="อีเมล" />
      <br />
      <Field
        component={TextField}
        type="password"
        label="รหัสผ่าน"
        name="password"
      />
      <br />
      <Field
        component={TextField}
        type="password"
        label="ยืนยันรหัสผ่าน"
        name="confirmPassword"
      />
      <br />
      <Field
        type="checkbox"
        component={CheckboxWithLabel}
        name="accept"
        Label={{ label: 'ฉันยอมรับเงื่อนไขและอตกลงเกี่ยวกับการใช้งาน' }}
      />
      {errors.accept ? (
        <FormHelperText error>{errors.accept.toString()}</FormHelperText>
      ) : null}

      {isSubmitting && <LinearProgress />}

      <div style={{ margin: '20px 0' }}>
        <Button
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          onClick={submitForm}
        >
          ยืนยัน
        </Button>
      </div>
    </Form>
  );
}
