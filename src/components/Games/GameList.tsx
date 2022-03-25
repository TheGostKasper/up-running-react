import { IGames } from "./Game.modal";
import GameCard from "./GameCard";

const GameList = ({ games }: any) => {
  return (
    <>
      {(games as Array<IGames>).map((game: IGames, indx: number) => (
        <GameCard game={game} key={indx} />
      ))}
    </>
  );
};

export default GameList;
