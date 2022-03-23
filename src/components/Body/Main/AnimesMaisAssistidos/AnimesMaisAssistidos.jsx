export const AnimesMaisAssistidos = (anime) => (
  <div className="anime-episode">
    <div className="anime-thumb">
      <div className="clip">
        <img src={anime.animeImg} alt={anime.id} />
        <span className="timer">24:00</span>
      </div>
      <span className="overlay"></span>
     </div>
    <h3>{anime.animeNome}</h3>
    <div className="user-views">
      {`${anime.animeViews} views`}{" "}
      <span id="visibility" className="material-icons">
        visibility
      </span>
    </div>
  </div>
);
