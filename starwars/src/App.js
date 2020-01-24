import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import CharacterCard from "./components/CharacterCard";
import {Container, Row} from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect( () => {

    axios.get("https://swapi.co/api/people/")
    .then(response => {
      console.log(response.data.results); //array of objects
      setPeople(response.data.results);
    })
    .catch(error => {
      console.log("Error: ", error);
    })

  }, []);

  return (
    <Container>
        <Row xs="2"> 

        {people.map(person => {
          return <CharacterCard name={person.name} gender={person.gender} birthYear={person.birth_year} key={person.name} />;
        })
      }

      </Row>
    </Container>
  );
}

export default App;

