import { Body } from "../components/Body/Body";
import { ChildHeader } from "../components/ChildHeader/ChildHeader";

export const Home = (prop) =>{
    
    return(
        <>
            <ChildHeader  />
            <Body animes={prop.animes} />
        </>
    );
}