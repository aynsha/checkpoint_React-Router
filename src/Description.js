import React from "react";
import { useParams } from "react-router-dom";
import moviesData from "./moviesData";
import ReactPlayer from "react-player";

//Fonction qui permet de récupérer l'id du film envoyé par la route gràce à useParams qui est une hook qui renvoie tout les paramétre le l'Url dont l'ID du film
const Description=()=>{
    const{id}= useParams();
    //Ensuite nous avons le tableau d'objet movieData qui va trouver ou récupérer l'id d'un objet correspondant à la valeur extraite de l'URL
    const movie= moviesData.find((moviesData) => moviesData.id === id);
    //Sinon d'exécuter cette condition  si l'id n'est pas trouvé dans moviesData
    if (!movie) {
        return <div>Film non trouvé</div>;
    }
    //Affichage
    return(
        <div>
          <h1>{movie.title}</h1>  
          <p>{movie.description}</p>
          <h2>Bande Annonce</h2>
          {/* Composant ReactPlayer pour gérer affichage de notre vidéo en passant à url une props {movie.trailerUrl}  qui va récupérer notre vidéo depuis moviesData*/}
          <ReactPlayer url={movie.trailerUrl} 
          width='100%'
          height='415px'
            title="YouTube video player"
             frameborder="0" allow="accelerometer;
              autoplay; clipboard-write; encrypted-media;
               gyroscope; picture-in-picture; web-share"
                allowfullscreen></ReactPlayer>
        </div>
    );
}
export default Description;