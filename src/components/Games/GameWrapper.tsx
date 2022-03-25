import { useState } from "react";
import GameService, { IGamePayload } from "../../Services/Game.service";
import LoadingError from "../shared-components/LoadingError";
import Pagination, { IPagination } from "../shared-components/Pagination";
import { IGames } from "./Game.modal";
import GameList from "./GameList";

const GameWrapper = () => {
  const onPaginationChange = (payload: IGamePayload) => {
    setFetchGames(() => () => GameService.getGames(payload));
  };
  const [fetchGames, setFetchGames] = useState(() => GameService.getGames);

  return (
    <>
      <LoadingError fetchFn={fetchGames}>
        {({ value }: { value: IPagination<Array<IGames>> }) => (
          <>
            <Pagination
              page={value.page}
              limit={value.limit}
              count={value.count}
              onPaginationChange={onPaginationChange}
            />
            <div className="u-grid-5">
              <GameList games={value.data} />
            </div>
          </>
        )}
      </LoadingError>
    </>
  );
};

export default GameWrapper;
