import { useParams } from "react-router-dom";
import GameService from "../../Services/Game.service";
import LoadingError from "../shared-components/LoadingError";
import { IGame } from "./Game.modal";

const GameDetails = () => {
  let { id } = useParams();
  return (
    <LoadingError fetchFn={() => GameService.getGameById(id || "")}>
      {({ value }: { value: IGame }) => (
        <>
          <h4>{value.title}</h4>
          <div className="slides-container mandatory-scroll-snapping">
            {value.screenshots.map((slide, idx) => (
              <img
                src={slide.image}
                alt={value.publisher}
                className="slide"
                key={idx}
                loading="lazy"
              />
            ))}
          </div>
          <div className="column my-4">
            <h5 className="text-muted mb-2">Summary</h5>
            <p className="u-caption">{value.description}</p>
          </div>

          <div className="row mb-3">
            <div className="col-6 col-md-4">
              <span className="text-muted">
                Title
                <br />
              </span>
              <p>{value.title}</p>
            </div>
            <div className="col-6 col-md-4">
              <span className="text-muted">
                Developer
                <br />
              </span>
              {value.developer}
            </div>
            <div className="col-6 col-md-4">
              <span className="text-muted">
                Publisher
                <br />
              </span>
              {value.publisher}
            </div>
            <div className="col-6 col-md-4">
              <span className="text-muted">
                Release Date
                <br />
              </span>
              {value.release_date}
            </div>
            <div className="col-6 col-md-4">
              <span className="text-muted">
                Genre
                <br />
              </span>
              {value.genre}
            </div>
            <div className="col-6 col-md-4">
              <span className="text-muted">
                Platform
                <br />
              </span>
              {value.platform}
            </div>
          </div>
        </>
      )}
    </LoadingError>
  );
};

export default GameDetails;
