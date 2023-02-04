import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ReactComponent as IconError } from '../../assets/exclamation-triangle.svg';
import useLoginState from '../../hooks/useLoginState';

const LoginForm = () => {
  const { loading, error, getUserLoginData, isUser } = useLoginState();

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: 'kminchelle', password: '0lelplR' }}
      validationSchema={Yup.object().shape({
        username: Yup.string()
          .required('required')
          .min(4, 'min 4 characters')
          .max(10, 'max 10 characters'),
        password: Yup.string().required('required').min(7, 'min 7 characters'),
      })}
      onSubmit={async (values) => {
        await getUserLoginData(values);
        if (isUser()) navigate(-1);
      }}>
      {(formik) => (
        <Form className="m-auto" style={{ width: '20rem' }}>
          <h2 className="text-center mb-3">Enter to your account</h2>
          <div className="form-floating mb-2">
            <Field className="form-control" name="username" />
            <label htmlFor="username">user name</label>
            <ErrorMessage name="username">
              {(msg) => (
                <div className="text-danger position-absolute top-0 end-0 pe-2 d-flex align-items-center gap-2">
                  {msg} <IconError />
                </div>
              )}
            </ErrorMessage>
          </div>
          <div className="form-floating mb-4">
            <Field className="form-control" name="password" type="password" />
            <label htmlFor="password">password</label>
            <ErrorMessage className="text-danger" name="password">
              {(msg) => (
                <div className="text-danger position-absolute top-0 end-0 pe-2 d-flex align-items-center gap-2">
                  {msg} <IconError />
                </div>
              )}
            </ErrorMessage>
          </div>
          <button
            className="w-100 btn btn-primary mb-1"
            type="submit"
            disabled={!formik.isValid || loading}>
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </>
            ) : (
              'Log in'
            )}
          </button>
          {error && (
            <p className="text-danger d-flex align-items-center justify-content-center gap-2 fw-bold fs-5">
              <IconError width={20} height={20} />
              {error}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
