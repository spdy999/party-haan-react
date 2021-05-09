import { Form, Field } from 'formik';
import { Button } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { IPartyFormProps } from './CreateParty';

export default function PartyForm({ submitForm }: IPartyFormProps) {
  return (
    <Form>
      <Field
        component={TextField}
        name="name"
        type="text"
        label="ชื่อปาร์ตี้"
      />
      <br />
      <Field
        component={TextField}
        name="capacity"
        type="number"
        min="1"
        label="จำนวนคนที่ขาด"
      />
      <br />
      <Field component={TextField} name="imgUrl" type="text" label="Url รูป" />
      <br />

      <div style={{ margin: '20px 0' }}>
        <Button variant="contained" color="primary" onClick={submitForm}>
          สร้างปาร์ตี้
        </Button>
      </div>
    </Form>
  );
}
