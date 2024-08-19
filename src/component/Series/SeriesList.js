import React, { useContext } from 'react';
import { MarvelContext } from '../../context/CharacterProvider';
import { Grid, Typography, CircularProgress } from '@mui/material';
import MarvelSeries from './series';


const SerieList= () => {
    const {series,loading} = useContext(MarvelContext);
    if(!series || series.length ===0){
        return <Typography variant="h4" gutterBottom> No series found</Typography>;
    }
    if(loading){
        return <CircularProgress />;    
    }
    return(
        <div>
            <Typography variant="h4" gutterBottom>
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