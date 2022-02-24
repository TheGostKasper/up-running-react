import React from "react";
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
      className={`d-flex justify-content-start align-items-center user-container pointer ${
        user.gender === "male" ? "g-reminder" : "r-reminder"
      }`}
      onClick={() => navigate(`/users/${user.login.uuid}`)}
    >
      <img
        src={user.picture.thumbnail}
        alt="User Thubnail"
        className="avatar"
      />
      <div className="f-colm">
        <h4 className="u-header">{displayName(user.name)}</h4>
        <small className="u-caption">{user.email}</small>
      </div>
    </div>
  );
};

export default User;
