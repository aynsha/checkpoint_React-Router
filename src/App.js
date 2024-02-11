import { Route, Routes, Link } from "react-router-dom";
import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import MovieList from "./MovieList";
import AddMovies from "./AddMovies";
import Filtre from "./Filtre";
import moviesData from "./moviesData";
import Description from "./Description";


function App(){
  //Création et initialisstion du state pour le tableau des films
  const [movies, setMovies]=useState(moviesData);
  const [filteredMovies, setFilteredMovies]= useState([]);

  //Comportement
  //fonction qui prend en paramétre un nouvel objet newMovie et met à jour le state movies gràce à son setter pour ajouter un nouveau film au tableau des films
  const addMovies=(newMovie)=>{
    setMovies([...movies, {id: movies.length+1,  ...newMovie}]);
  };

  const handleFilterChange=({title, note})=>{
    const filtreMovies= movies.filter((film) => 
    film.title.toLowerCase().includes(title.toLowerCase()) 
    && 
    film.note.toString().includes(note.toString())
    );
    setFilteredMovies(filtreMovies);
  };

  const Home=()=>{
    return (
      <div>
        <h2>Filtrer les films</h2>
      <Filtre onFilterChange={handleFilterChange} />
      <h1>Liste des Films</h1>
       <MovieList movies={filteredMovies.length ? filteredMovies : movies} /> {/* Composant MoviesList qui prend movies comme props, utiliser pour accéder à la liste des films dans ses propriétés (props) et de les utiliser à l'intérieur du composant. */}
      <h2>Ajouter un film</h2>
       <AddMovies onAddMovies= {addMovies} /> {/*Ajout de la fonction onAddMovies  qui est une props appelé pour la soumission des données du formulaire */}
      </div>
    );
  }
  //Affichage
  return(
    <div>
      <Navbar expand="lg" className="bg-body-primary"  >
      <Container>
      {/* Link pour gérer  l'affichage de la page d'accueil, de faire un retour lorsqu'on est dans la page Description */}
      <Link to="/" style={{"text-decoration":"none"}}><h3>Accueil</h3></Link>
      </Container>
    </Navbar>
      <Routes>
        {/* "/" correspond  à la route par défaut de notre page */}
        <Route path="/" element={<Home/>}/>

        {/* "/movie/:id" qui correspond au route qui va permettre d'afficher la page de Description d'un film fourni gràce à son id */}
        <Route path="/movie/:id" element={<Description/>}/>
      </Routes>
      
    </div>
   
  );
}
export default App;