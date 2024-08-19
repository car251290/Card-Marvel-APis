import React from'react';
import {Card,CardContent,Typography} from '@mui/material';

const MarvelEvents = ( {event }) => {
    if(!event) {
        return null;
    }
    const{title,description,thumbnail} = event;

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {event.title}
                </Typography>
                {event.description && (
                    <Typography variant="body2" color="textSecondary">
                        {event.description}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );

};

export default MarvelEvents;