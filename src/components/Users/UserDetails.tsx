import { Link, useParams } from "react-router-dom";
import UserService from "../../Services/User.service";
import LoadingError from "../shared-components/LoadingError";
import { IName, IUser } from "./User-modal";

const fullName = ({ first, last, title }: IName) =>
  `${title}- ${first} ${last}`;

const getFullAddress = ({ country, city, state }: any) => {
  return `${country}-${city}-${state}`;
};
const UserDetails = () => {
  let { id } = useParams();
  return (
    <LoadingError fetchFn={() => UserService.getUser(id || "")}>
      {({ value }: { value: IUser }) => (
        <>
          <div className="card d-flex justify-content-center align-items-center">
            <div className=" mt-4">
              <img
                src={value.picture.large}
                className="card-img"
                alt={value.name.first}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{fullName(value.name)}</h5>
              <p className="card-text">
                Lives in {getFullAddress(value.location)}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Email : {value.email}</li>
              <li className="list-group-item">Phone : {value.phone}</li>
            </ul>
            <div className="card-body">
              <Link to="/users">Back To List</Link>
            </div>
          </div>
        </>
      )}
    </LoadingError>
  );
};

export default UserDetails;
