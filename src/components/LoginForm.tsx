import { Form, Field } from 'formik';
import { Button, LinearProgress, Link } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
interface Props {
  isSubmitting: boolean;
  submitForm: () => void;
}
export default function LoginForm({ isSubmitting, submitForm }: Props) {
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
      {isSubmitting && <LinearProgress />}
      <br />

      <div style={{ margin: '20px 0' }}>
        <Button
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          onClick={submitForm}
        >
          เข้าสู่ระบบ
        </Button>
        <br />
        <br />
        <Link href="/register">
          <Button variant="contained" color="primary">
            สร้างบัญชีผู้ใช้
          </Button>
        </Link>
      </div>
    </Form>
  );
}
