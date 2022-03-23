import "./animescard.css";
import { VerificaView } from "./VerificaView.jsx";

export const AnimesCard = (anime) => {
  return (
    <div className="anime-episode">
      <div className="anime-thumb">
        <div className="clip">
          <img src={anime.animeImg} alt={anime.animeid} />
          <span className="ui-ep">{`EP.${anime.animeEp} (HD)`}</span>
        </div>
        <span className="overlay"></span>
      </div>
      <h3>{anime.animeNome}</h3>
      <div className="anime-info">
        <div className="user-author">
          {anime.animeAuthor}{" "}
          <span id="verified" className="material-icons">
            verified
          </span>
        </div>
        <div className="user-views">
          {`${anime.animeViews} views `}{" "}
          <span id="visibility" className="material-icons">
            visibility
          </span>
          <VerificaView animeViews={anime.animeViews} />
        </div>
      </div>
    </div>
  );
};
