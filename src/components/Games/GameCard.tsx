import { useNavigate } from "react-router-dom";
import { IGames } from "./Game.modal";

const GameCard = ({ game }: { game: IGames }) => {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex flex-column justify-content-between border border-dark rounded p-2 pointer"
      onClick={() => navigate(`/games/${game.Id}`)}
    >
      <img src={game.thumbnail} alt={game.title} className="game-image" />
      <h4 className="u-header py-2 ">{game.title}</h4>
      <small className="g-description">{game.short_description}</small>
      <div className="d-flex flex-row justify-content-between align-items-center mt-2">
        <span className="badge chip">{game.platform}</span>
        <span className="badge chip ">{game.release_date}</span>
      </div>
    </div>
  );
};

export default GameCard;
