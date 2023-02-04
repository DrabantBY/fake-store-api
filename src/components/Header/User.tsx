import { useLoginState } from '../../state';
import { ReactComponent as IconUser } from '../../assets/person-circle.svg';

const User = () => {
  const { user } = useLoginState();
  return (
    <span className="d-flex gap-2 text-light align-items-center">
      {user ? (
        <>
          <span
            className="rounded-circle overflow-hidden bg-primary"
            style={{ width: '2rem', height: '2rem' }}>
            <img src={user.image} alt="user" />
          </span>
          {user.username}
        </>
      ) : (
        <>
          <IconUser fill="#fff" width={30} height={30} />
          <span>unknown</span>
        </>
      )}
    </span>
  );
};

export default User;
