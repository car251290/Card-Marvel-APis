import React, { useContext } from 'react';
import { MarvelContext } from '../../context/CharacterProvider';
import { Grid, Typography, CircularProgress } from '@mui/material';
import MarvelSeries from './series';
import { red } from '@mui/material/colors';


const SerieList= () => {
    const {series,loading} = useContext(MarvelContext);

    if(!series.length){
        return <Typography variant="h4" gutterBottom> No series found</Typography>;
    }
    if(loading){
        return <CircularProgress />;    
    }
    return(
        <div>
            <Typography variant="h4" gutterBottom sx={{color:'red'}}>
                Marvel Series
            </Typography>
            <Grid container spacing={3}>
                {series.map((serie) => (
                    <Grid item xs={12} sm={6} md={4} key={serie.id}>
                        <MarvelSeries serie={serie} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
};

export default SerieList; 