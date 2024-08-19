import React, {useContext} from 'react';
import {MarvelContext } from '../../context/CharacterProvider';
import MarvelEvents from './Event';
import {Grid, Typography, CircularProgress} from '@mui/material';


const EventList = () => {
    const {events,loading} = useContext(MarvelContext);
    if(!events.length) {
        return <Typography variant="h4" gutterBottom> No events found</Typography>;
    }

    if(loading){
        return <div>Loading...</div>;
    }
return (
    <div>
    <Typography variant="h4" gutterBottom>
        Marvel Events
    </Typography>
    <Grid container spacing={3}>
        {events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
                <MarvelEvents event={event} />
            </Grid>
        ))}
    </Grid>
</div>
    
);
};
export default EventList;