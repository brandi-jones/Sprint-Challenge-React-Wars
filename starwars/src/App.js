import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";
import {Container, Row, Button} from "reactstrap";
import styled from "styled-components";

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect( () => {
    

    let url = "https://swapi.co/api/people/?page=" + pageNum.toString();
    console.log("url: ", url);

    axios.get("https://swapi.co/api/people/?page=" + pageNum.toString())
    .then(response => {
      console.log(response.data.results); //array of objects
      setPeople(response.data.results);
    })
    .catch(error => {
      console.log("Error: ", error);
    })

  }, [pageNum]);

  return (
    <>

    <Header/>
    
    <Container>
        <Row xs="2"> 

        {people.map(person => {
          return <CharacterCard name={person.name} gender={person.gender} birthYear={person.birth_year} key={person.name} />;
        })
      }

      </Row>
    </Container>

    <ButtonDiv>
      <Button color="secondary" size="lg" onClick={() => setPageNum(pageNum - 1)}>Previous Page</Button>{' '}
      <Button color="secondary" size="lg" onClick={() => setPageNum(pageNum + 1)}>Next Page</Button>{' '}
    </ButtonDiv>
    
    </>
  );
}

export default App;

