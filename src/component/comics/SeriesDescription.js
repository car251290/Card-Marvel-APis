// SeriesDescription.js
import React, { useContext } from 'react';
import { MarvelContext  } from '../../context/CharacterProvider';    
import Story from './Story';
import { Grid, Typography, CircularProgress } from '@mui/material';

const SeriesDescription = () => {
  const { stories, loading } = useContext(MarvelContext);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{color:'red'}}>
        Marvel comics
      </Typography>
      <Grid container spacing={3}>
        {stories.map((story) => (
          <Grid item xs={12} sm={6} md={4} key={story.id}>
            <Story story={story} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SeriesDescription;