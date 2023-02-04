import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ReactComponent as IconError } from '../../assets/exclamation-triangle.svg';
import { useLoginState } from '../../state';

const LoginForm = () => {
  const { error, getUserLoginData } = useLoginState((state) => ({
    error: state.error,
    getUserLoginData: state.getUserLoginData,
  }));
  console.log(error);
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object().shape({
        username: Yup.string()
          .required('required')
          .min(4, 'min 4 characters')
          .max(10, 'max 10 characters'),
        password: Yup.string().required('required').min(7, 'min 7 characters'),
      })}
      onSubmit={(values) => getUserLoginData(values)}>
      {(formik) => (
        <Form className="m-auto" style={{ width: '20rem' }}>
          <h2 className="text-center mb-3">Enter to your account</h2>
          <div className="form-floating mb-2">
            <Field className="form-control" name="username" title="username: kminchelle" />
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
            <Field
              className="form-control"
              name="password"
              type="password"
              title="password: 0lelplR"
            />
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
            className="w-100 btn btn-primary"
            type="submit"
            disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}>
            {formik.isSubmitting && (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </>
            )}
            {!formik.isSubmitting && error && error}
            {!formik.isSubmitting && !error && 'Log in'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
