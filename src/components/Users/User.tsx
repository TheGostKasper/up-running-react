import { IName, IUser } from "./User-modal";
import { useNavigate } from "react-router-dom";
interface IIuserProp {
  user: IUser;
}

const displayName = ({ first, last }: IName) => {
  return `${first} ${last}`;
};

const User = ({ user }: IIuserProp) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex-column d-flex justify-content-start align-items-center border border-dark rounded p-2 pointer "
      onClick={() => navigate(`/users/${user.login.uuid}`)}
    >
      <img src={user.picture.medium} alt="User Thubnail" className="avatar" />
      <div className="f-col py-2 ">
        <h4 className="u-header text-center">{displayName(user.name)}</h4>
        <small className="u-caption text-center">{user.email}</small>
      </div>
    </div>
  );
};

export default User;
