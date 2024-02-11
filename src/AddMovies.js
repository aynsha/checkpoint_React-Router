
import React, {useState} from "react"; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./styles/style.css";

//Création et initialisation du state  pour les données entrées par l'utilisateur
const AddMovies=({onAddMovies})=>{
 const [newMovie, setNewMovie]= useState({
    title:' ',
    posteUrl:' ',
    description: ' ',
    note: ' ',
 });

 //Comportement
 //la fonction handleInputChange  pour gérer le changement de valeur d'un input (évènement onChange) gràce à son setter setNewMovie
 const handleInputChange=(event)=>{
    setNewMovie({...newMovie, [event.target.name]: event.target.value})
 }; 

 //la fonction handleSubmit  est déclenché lorsque le boutton submit est cliqué et  envoie la nouvelle movie à la liste de films MovieList 
 const handleSubmit=(event)=>{
   event.preventDefault();
   onAddMovies(newMovie);
   setNewMovie({
    title:' ',
    posteUrl:' ',
    description: ' ',
    note: ' ',
   });
 }

 //Affichage
 return(
    
    <Form className="film-form" onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
      <Form.Label>Title:</Form.Label>
      <Form.Control type="text" name="title" value={newMovie.title} onChange={handleInputChange} required />
     </Form.Group>

     <Form.Group controlId="formImage">
      <Form.Label>Image URL:</Form.Label>
      <Form.Control type="text" name="posteUrl" value={newMovie.posteUrl} onChange={handleInputChange} required />
     </Form.Group>

     <Form.Group controlId="formDescription">
      <Form.Label>Description:</Form.Label>
      <Form.Control as="textarea" rows={3} name="description" value={newMovie.description} onChange={handleInputChange} required />
      </Form.Group>

      <Form.Group controlId="formNote">
      <Form.Label>Note:</Form.Label>
      <Form.Control type="number" name="note" value={newMovie.note} onChange={handleInputChange} required />
      </Form.Group>

      <Button type="submit">Ajouter un film</Button>
    </Form>
 );
}
export default AddMovies;