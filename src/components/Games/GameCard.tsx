import { useNavigate } from "react-router-dom";
import { IGames } from "./Game.modal";

const GameCard = ({ game }: { game: IGames }) => {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex flex-column justify-content-between g-card "
      onClick={() => navigate(`/games/${game.id}`)}
    >
      <h4 className="u-header py-2 ">{game.title}</h4>
      <img src={game.thumbnail} alt={game.title} className="game-image" />
      <small className="g-description">{game.short_description}</small>
      <div className="d-flex flex-row justify-content-between align-items-center mt-2">
        <span className="badge chip">{game.platform}</span>
        <span className="badge chip ">{game.release_date}</span>
      </div>
    </div>
  );
};

export default GameCard;
