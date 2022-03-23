import "./animespopulares.css"

export const AnimesPopulares = (animePopular) => (
  <div className="anime-episode">
    <div className="anime-thumb">
      <div className="clip">
        <img src={animePopular.animeImg} alt={animePopular.id} />
        <span className="timer">24:00</span>
      </div>
      <span className="overlay"></span>
     </div>
    <h3>{animePopular.animeNome}</h3>
    <div className="user-views">
      {`${animePopular.views} views`}{" "}
      <span id="visibility" className="material-icons">
        visibility
      </span>
    </div>
  </div>
);
