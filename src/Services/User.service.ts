import axios, { AxiosResponse } from "axios";
import { IPayload } from "../components/shared-components/Pagination";


// https://randomuser.me/api/?page=5&results=2

const UserService = {
  getUsersAsync: ({
    page = 1,
    limit = 10,
  }: IPayload): Promise<AxiosResponse<any, any>> => {
    return getUsers({ page, limit });
  },

  getUsers: ({ page = 1, limit = 10 }: IPayload) => {
    return axios
      .get(`https://randomuser.me/api/?page=${page}&results=${limit}`)
      .then((res) => {
        return res.data.results;
      });
  },

  getUser: (id: string) => {
    return axios.get(`https://randomuser.me/api/?uuid:${id}`).then((res) => {
      return res.data.results[0];
    });
  },
};

async function getUsers({ page = 1, limit = 10 }: IPayload) {
  return await axios.get(
    `https://randomuser.me/api/?page=${page}&results=${limit}`
  );
}
export default UserService;
