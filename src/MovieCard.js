import React from "react";
import Card from 'react-bootstrap/Card';
import './styles/style.css'
import { Button } from "react-bootstrap";
import { useNavigate} from "react-router-dom";

function MovieCard ({movie}) {
 const navigate = useNavigate();
//Fonction handleWatchTailer => va nous permettre  d'aller sur la page de description gràce au hook useNavigate
// en effectuant la navigation vers une nouvelle route (<Route path="/movie/:id" element={<Description/>}/>) correspondant à la page de description du film dont l'ID est fourni par movie.id  
 const handleWatchTailer=()=>{
    navigate(`/movie/${movie.id}`);
 };
  //Création du card des films
   return(
    <Card className="card" >
            <Card.Img variant="top" src={movie.posteUrl}/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    <p>Description:  {movie.description}</p>
                    <p>Notes:  {movie.note}/5</p>
                    {/*  Bouton pour regarder la vidéo */}
                    <Button onClick={handleWatchTailer}>Bande Annonce</Button>
                </Card.Text>
            </Card.Body>
        </Card> 
   );
}
export default MovieCard;