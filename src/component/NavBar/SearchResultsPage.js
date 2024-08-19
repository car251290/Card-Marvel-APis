import React,{useContext} from 'react';
import {MarvelContext} from '../../context/CharacterProvider';
import {Grid, Typography, CircularProgress} from '@mui/material';



const SearchResultsPage = ({searchQuery}) => {
    const {characters,loading} = useContext(MarvelContext);
    if(loading){
        return <CircularProgress />;
    }
    const filteredResults = characters.filter(character => {
        return character.name?.includes(searchQuery);
    });
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Search Results
            </Typography>
            <Grid container spacing={3}>
                {filteredResults.length > 0 ? (
                    filteredResults.map(character => (
                        <Grid item xs={12} sm={6} md={4} key={character.id}>
                            {/* Display your character card component here */}
                            <div>{character.name}</div>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" color="textSecondary">
                        No results found.
                    </Typography>
                )}
            </Grid>
        </div>
    );


}

export default SearchResultsPage;