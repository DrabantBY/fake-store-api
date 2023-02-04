import useLoginState from '../../hooks/useLoginState';

const SignUp = () => {
  const { clearUserLoginData } = useLoginState();
  return (
    <button className="btn btn-outline-primary" type="button" onClick={clearUserLoginData}>
      Sign Up
    </button>
  );
};

export default SignUp;
