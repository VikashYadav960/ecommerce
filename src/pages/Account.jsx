import { useSelector } from "react-redux";

function Account() {
  const { userInfo } = useSelector(state => state.user);

  return (
    <div className="account">
      <h1>Welcome</h1>
      <p>Email: {userInfo?.email}</p>
    </div>
  );
}

export default Account;
