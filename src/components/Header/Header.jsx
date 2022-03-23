import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as BarraSVG } from "../../imgs/barras.svg";
import { ReactComponent as SearchSVG } from "../../imgs/search.svg";
import { PageSearch } from "../../pages/PageSearch";
import "./header.css";

export const Header = (prop) => {
  const [animeNome, setAnimeNome] = useState("");
  //useEffect(() =>console.log(animeNome), [animeNome])
  return (
    <header>
      <div className="ui_header">
        <BarraSVG height={"28px"} width={"30px"} />
        <span id="header-span">
          <Link to={`/`}>
            <img
              alt="logo"
              width={"150px"}
              src="https://goyabu.com/goyabu-logo2.png"
            />
            </Link>
        </span>
      </div>
      <div className="form_menu">
        <input
          type="text"
          placeholder="Buscar animes"
          onChange={(e) => setAnimeNome(e.target.value)}
        />
        <Link className="button" to={`/pagesearch?anime=${animeNome}`}>
          <SearchSVG />
        </Link>
        {/*<button onClick={() => navigate(`/pagesearch/${animeNome}`)}>
          <SearchSVG />
        </button>
  */}
      </div>
    </header>
  );
};
