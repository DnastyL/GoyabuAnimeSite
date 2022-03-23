import { Main } from "./Main/Main"
import { AnimesDestaques } from "./AnimesDestaques/AnimesDestaques";
import "./body.css"


export const Body = (prop) =>{
   

    return(
        <div className="main-index">
            <Main animes={prop.animes}/>
            <AnimesDestaques/>
        </div>
    );
}