import { IGames } from "./Game.modal";
import GameCard from "./GameCard";

const GameList = ({ games: { value } }: any) => {
  return (
    <>
      {(value as Array<IGames>)
        .slice(0, 10)
        .map((game: IGames, indx: number) => (
          <GameCard game={game} key={indx} />
        ))}
    </>
  );
};

export default GameList;
