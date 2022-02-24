import axios from "axios";

const url = "https://www.freetogame.com/api";

const GameService = {
  getGames: () => {
    return axios.get(`${url}/games`).then(({ data }) => {
      return data;
    });
  },

  getGameById: (id: string) => {
    return axios.get(`${url}/game?id=${id}`).then(({ data }) => {
      return data;
    });
  },
};

export default GameService;
