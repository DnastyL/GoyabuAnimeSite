export const VerificaView = (anime) =>{

    if(anime.animeViews >= 300 && anime.animeViews <= 1200){
        return(` 4 dias atrás`)
    }if(anime.animeViews > 0 && anime.animeViews < 150){
        return(` 22 horas atrás`)
    }
    if(anime.animeViews > 150 && anime.animeViews < 300){
        return(` 2 dias atrás`)
    }
  }