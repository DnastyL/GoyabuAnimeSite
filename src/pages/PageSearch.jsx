import { PageSearchMain } from "../components/PageSearchMain/PageSearchMain";
import { Link, useSearchParams } from "react-router-dom";
import "./pagesearch.css";
import { AnimesDestaques } from "../components/Body/AnimesDestaques/AnimesDestaques";

export const PageSearch = (prop) => {
  const [searchParams] = useSearchParams();
  const parametro = searchParams.get("anime").toLowerCase();

  // const busca = animes.filter((anime) => anime.includes(parametro))

  return (
    <div className="main-index">
      <div className="page-search-header">
            <Link className="inicio" to={`/`}>Inicio</Link>
            {" » "}
            <span>Você pesquisou por {parametro}</span>
          </div>
      <div className="main">
        <div className="index-size">
          <h1>
            <span>Você pesquisou por: {parametro}</span>
          </h1>
          <div className="ui-anime-main">
            {prop.animes
              .filter((t) => t.title.toLowerCase().includes(parametro))
              .map((anime) => (
                <PageSearchMain
                  key={anime.id}
                  nome={anime.title}
                  img={anime.img}
                  views={anime.views}
                  author={anime.author}
                />
              ))}
          </div>
        </div>
      </div>
      <AnimesDestaques />
    </div>
  );
};
