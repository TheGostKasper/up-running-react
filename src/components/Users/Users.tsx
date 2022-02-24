import User from "./User";
import { IUser } from "./User-modal";

const Users = ({ users: { value }, onPayloadChange }: any) => {
  return (
    <div >
      {value.map((user: IUser, indx: number) => (
        <User user={user} key={indx} />
      ))}

      <button className="btn btn-primary" onClick={onPayloadChange}>Next</button>
    </div>
  );
};

export default Users;
