import { useState } from "react";
import UserService from "../../Services/User.service";
import LoadingError from "../shared-components/LoadingError";
import Pagination, { IPayload } from "../shared-components/Pagination";
import User from "./User";
import { IUser } from "./User-modal";

const fetchUserApi = (payload: IPayload = { page: 1, limit: 25 }) => {
  return UserService.getUsers(payload);
};

const UserList = () => {
  const [page, setPage] = useState(1);

  const [fetchUser, setFetchuser] = useState(() => fetchUserApi);
  const onPayloadChange = (payload: IPayload) => {
    setPage(payload.page);
    setFetchuser(() => () => fetchUserApi(payload));
  };

  return (
    <LoadingError fetchFn={fetchUser}>
      {({ value }: { value: Array<IUser> }) => (
        <>
          <Pagination
            page={page}
            limit={25}
            onPaginationChange={onPayloadChange}
          />
          <div className="u-grid-5">
            {value.map((user: IUser, indx: number) => (
              <User user={user} key={indx} />
            ))}
          </div>
        </>
      )}
    </LoadingError>
  );
};

export default UserList;
