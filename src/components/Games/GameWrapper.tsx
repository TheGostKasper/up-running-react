import GameService from "../../Services/Game.service";
import LoadingError from "../shared-components/LoadingError";
import { IGames } from "./Game.modal";
import GameList from "./GameList";

const GameWrapper = () => {
  return (
    <>
      <LoadingError fetchFn={GameService.getGames}>
        {(value: Array<IGames>) => (
          <div className="u-grid-4">
            <GameList games={value} />
          </div>
        )}
      </LoadingError>
    </>
  );
};

export default GameWrapper;
