import s from './ContactForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const phoneRegex = /^[0-9]{10}$/;

const ContactForm = () => {
  const nameConfig = Yup.string()
    .min(3, 'Min 3 characters required')
    .max(50, 'Min 50 characters allowed')
    .required('This field is mandatory');
  const numberConfig = Yup.string()
    .matches(phoneRegex, 'Phone number must contain 10 digits')
    .required('This field is mandatory');
  const orderSchema = Yup.object().shape({
    name: nameConfig,
    number: numberConfig,
  });

  const dispatch = useDispatch();

  const onContactAdded = (values, action) => {
    const { name, number } = values;
    const newContact = {
      number,
      name,
    };
    dispatch(addContact(newContact));
    action.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={orderSchema}
        onSubmit={onContactAdded}
        initialValues={{
          name: '',
          number: '',
        }}
      >
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Enter name"
          />
          <ErrorMessage name="name" className={s.error} component="div" />
          <Field
            className={s.input}
            type="tel"
            name="number"
            placeholder="Enter phone number (e.g., 5873232123)"
          />
          <ErrorMessage name="number" className={s.error} component="div" />
          <button className={s.button} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
