import { Body } from "../components/Body/Body";
import { ChildHeader } from "../components/ChildHeader/ChildHeader";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () =>{
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/animes?_embed=animesPopulares")
      .then((response) => {
        setAnimes(response.data);
      });
  }, []);
    
    return(
        <>
            <ChildHeader  />
            <Body animes={animes} />
        </>
    );
}