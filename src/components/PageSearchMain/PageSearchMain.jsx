export const PageSearchMain = (anime) => {
    return(
        <div className="anime-episode">
             <div className="anime-thumb">
        <div className="clip">
          <img src={anime.img} alt={`Animes images`}/>
        </div>
        <span className="overlay"></span>
      </div>
      <h3>{anime.nome}</h3>
      <div className="anime-info">
        <div className="user-author">
          {anime.author}{" "}
          <span id="verified" className="material-icons">
            verified
          </span>
        </div>
        <div className="user-views">
          {`${anime.views} views `}{" "}
          <span id="visibility" className="material-icons">
            visibility
          </span>
        </div>
      </div>
        </div>
    )
}