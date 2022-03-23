import "./main.css";
import { AnimesCard } from "./AnimesCard/AnimesCard";
import { AnimesPopulares } from "./AnimesPopulares/AnimesPopulares";
import { AnimesMaisAssistidos } from "./AnimesMaisAssistidos/AnimesMaisAssistidos";

export const Main = (prop) => {
  return (
    <main>
      <div className="index-size">
        <div className="main-child-header">
          <div className="main-titles">
            <h2>CONTINUE ASSISTINDO</h2>
            <span>Não há nenhum episódio recente.</span>
          </div>
        </div>
        <div className="title-bar">
          <h2>LANÇAMENTOS</h2>
          <span className="span-text">
            Próxima Página
            <span id="icon-arrow" className="material-icons">
              keyboard_arrow_right
            </span>
          </span>
        </div>
        <div className="ui-anime-main">
          {prop.animes.map((anime) => (
            <AnimesCard
              key={anime.id}
              animeAuthor={anime.author}
              animeViews={anime.views}
              animeNome={anime.title}
              animeImg={anime.img}
              animeEp={anime.ep}
            />
          ))}
        </div>
        <div className="episodes-container">
          <h2>ANIMES MAIS POPULARES</h2>
          <div className="ui-anime-main">
              {prop.animes.map((anime) =>
                anime.animesPopulares.map((animePopular) => (
                  <AnimesPopulares
                    anime={anime}
                    key={animePopular.id}
                    id={animePopular.animeId}
                    animeNome={animePopular.title}
                    animeImg={animePopular.img}
                    views={animePopular.views}
                  />
                ))
              )}
          </div>
        </div>
        <div className="episodes-container">
          <h2>EPISÓDIOS MAIS ASSISTIDOS</h2>
          <div className="ui-anime-main">
            {prop.animes
              .filter((v) => v.views > 180)
              .map((anime) => (
                <AnimesMaisAssistidos
                  key={anime.id}
                  animeImg={anime.img}
                  animeNome={anime.title}
                  animeViews={anime.views}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};
