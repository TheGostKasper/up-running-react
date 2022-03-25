import axios from "axios";

const url = "http://localhost:9090/api";

export interface IGamePayload {
  page: number;
  limit: number;
  filters: Array<any>;
}
const defaultPayload: IGamePayload = {
  limit: 10,
  page: 1,
  filters: [],
};
const GameService = {
  getGames: (payload: IGamePayload = defaultPayload) => {
    return axios.post(`${url}/games`, payload).then(({ data }: any) => {
      return data;
    });
  },

  getGameById: (id: string) => {
    return axios.get(`${url}/game/${id}`).then(({ data: { data } }) => {
      return data;
    });
  },
};

export default GameService;
