import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerThunk } from '../redux/auth/operations';

const Register = () => {
  const initialValues = { password: '', email: '', name: '' };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
      // unwrap waits for the promise to resolve
      .unwrap()
      .then(() => navigate('/'));
    options.resetForm();
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center r">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="bg-white shadow-xl rounded-3xl p-6 flex flex-col md:bg-gray-100 xl:bg-slate-200 gap-4 w-1/2 md:w-1/3 xl:w-1/4">
          <h3 className="text-center font-bold">Register</h3>
          <label className="flex flex-col gap-2">
            <span>Name:</span>
            <Field
              className="p-2 border-1 border-black rounded-md shadow-md cursor-pointer"
              name="name"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Email:</span>
            <Field
              className="p-2 border-1 border-black rounded-md shadow-md cursor-pointer"
              name="email"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Password:</span>
            <Field
              className="p-2 border-1 border-black rounded-md shadow-md cursor-pointer"
              name="password"
              type="password"
            />
          </label>
          <button
            className="px-2 py-2 shadow-2xl rounded-md bg-teal-400 text-white  hover:bg-teal-500"
            type="submit"
          >
            Login
          </button>
          <p>
            Already have an account?
            <Link className="text-teal-500" to="/login">
              Login!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
