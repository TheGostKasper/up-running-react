import { useState } from "react";
import UserService from "../../Services/User.service";
import LoadingError, { IPayload } from "../shared-components/LoadingError";
import { IUser } from "./User-modal";
import Users from "./Users";

const fetchUserApi = (payload: IPayload = { page: 1, limit: 10 }) => {
  return () => UserService.getUsers(payload);
};

const UserList = () => {
  const [page, setPage] = useState(1);

  const [fetchUser, setFetchuser] = useState(fetchUserApi);
  const onPayloadChange = () => {
    setPage(page + 1);
    setFetchuser(() => fetchUserApi({ page: page + 1, limit: 10 }));
  };

  return (
    <LoadingError fetchFn={fetchUser}>
      {(value: Array<IUser>) => (
        <Users users={value} onPayloadChange={onPayloadChange} />
      )}
    </LoadingError>
  );
};

export default UserList;
