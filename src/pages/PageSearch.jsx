import { PageSearchMain } from "../components/PageSearchMain/PageSearchMain";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./pagesearch.css";
import { AnimesDestaques } from "../components/Body/AnimesDestaques/AnimesDestaques";
import axios from "axios";

export const PageSearch = () => {
  const [searchParams] = useSearchParams();
  const parametro = searchParams.get("anime").toLowerCase();

  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/animes")
      .then((response) => {
        setAnimes(response.data);
      });
  }, []);

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
            {animes
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
