import { useNavigate } from 'react-router-dom';
import useLoginState from '../../hooks/useLoginState';

const SignUp = () => {
  const clearUserLoginData = useLoginState((state) => state.clearUserLoginData);
  const navigate = useNavigate();
  return (
    <button
      className="btn btn-outline-primary"
      type="button"
      onClick={() => {
        clearUserLoginData();
        navigate('/');
      }}>
      Sign Up
    </button>
  );
};

export default SignUp;
