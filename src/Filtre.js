 import React, { useState } from 'react';
 import './styles/style.css';
 import Form from 'react-bootstrap/Form';
 import Button from 'react-bootstrap/Button';

 //Création et initialisation des states
 const Filtre=({ onFilterChange })=>{
    const [titleFilter, setTitleFilter]= useState('');
    const [noteFilter, setNoteFilter]= useState('');
 

    // Gestion du formulaire de filtrage
    const handleTitleChange=(event)=>{
      setTitleFilter(event.target.value);
    };

    const handleNoteChange=(event)=>{
      setNoteFilter(event.target.value);
    };

    const handleSubmit=(event)=>{
      event.preventDefault();
      onFilterChange({title: titleFilter, note: noteFilter});
    };

    //Affichage
    return(
      <Form className='film-form' onSubmit={handleSubmit}>

        <Form.Group controlId='formTitle'>
        <Form.Label>Filtrer par titre:</Form.Label>
        <Form.Control type="text" value={titleFilter} onChange={handleTitleChange} />
        </Form.Group>

        <Form.Group  controlId='formNote'>
        <Form.Label>Filtrer par note:</Form.Label>
        <Form.Control type="text" value={noteFilter} onChange={handleNoteChange} />
        </Form.Group>

        <Button type="submit">Filtrer</Button>
      </Form>
    );
 }

 export default Filtre;
