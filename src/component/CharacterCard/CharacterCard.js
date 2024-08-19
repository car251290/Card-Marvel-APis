import React,{useState} from "react";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";


const CharacterCard = ({ character }) => {
  const [showDescription,setShowDescription] = useState(false);
  // handleToggleDescription function for get the description of the character
  const handleToggleDescription = () => {
    setShowDescription(!showDescription);

  };

    return (
      <CardContent>
        <CardMedia
          component="img"
          height="140"
          image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleToggleDescription}>
          {showDescription ?  "Hide Description": 'Show Description'}
          </Button>
          {showDescription && (
            <Typography variant="body2" color="text.secondary" sx={{marginTop:2}}>
            {character.description ? character.description : "No description available."}
            </Typography>
          )}
      </CardContent>
    );

};


export default CharacterCard;