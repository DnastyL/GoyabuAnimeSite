import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageSearch } from "./pages/PageSearch";
import { useState, useEffect } from "react";
import axios from "axios";

export const AppRoutes = () => {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/animes?_embed=animesPopulares")
      .then((response) => {
        setAnimes(response.data);
      });
  }, []);

  return (
    <Routes>
      <Route path="/pagesearch" element={<PageSearch animes={animes} />} />
      <Route path="/" element={<Home animes={animes} />} />
    </Routes>
  );
};
