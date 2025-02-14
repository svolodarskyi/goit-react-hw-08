import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginThunk } from '../redux/auth/operations';

const Login = () => {
  const initialValues = { password: '', email: '' };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    options.resetForm();
    dispatch(loginThunk(values))
      // unwrap waits for the promise to resolve
      .unwrap()
      .then(() => navigate('/'));
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center r">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="bg-white shadow-xl rounded-3xl p-6 flex flex-col gap-4 w-1/4">
          <h3 className="text-center font-bold">Login</h3>
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
            You do not have account?
            <Link className="text-teal-500" to="/register">
              Let us create one!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
