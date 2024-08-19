import React,{useContext} from "react";
import CharacterCard from './CharacterCard';
import { MarvelContext } from '../../context/CharacterProvider';
import {Grid,Container,Card} from "@mui/material";

const CharactersList = ({searchQuery}) => {
    const {characters,loading} = useContext(MarvelContext);
    if(loading){
        return <div>Loading...</div>;
    }

  const filteredCharacters = characters.filter((character)=> {
      // Check if character.name exists and is a string before calling toLowerCase()
      return character.name?.includes(searchQuery);
      
  })
    return(
        <Container>
        <Grid container spacing={3} justifyContent="center">
          {filteredCharacters.map((character) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CharacterCard character={character} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
       
    );
} ;

export default CharactersList;
