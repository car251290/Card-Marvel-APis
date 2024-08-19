import React from 'react';

import {Card,CardContent,Typography} from '@mui/material';

const Story = ({story}) => {
    if(!story) {
        return null;
    }
    const {title,thumbnail,} = story;

    return (
        <Card>
        <CardContent>
            {thumbnail && (
                <img
                    src={`${thumbnail.path}.${thumbnail.extension}`}
                    alt={title || 'Story Thumbnail'}
                    style={{ width: '100%', height: 'auto' }}
                />
            )}
            <Typography variant="h5" component="div">
                {title || 'No Title Available'}
            </Typography>
           
        </CardContent>
    </Card>
    );
};

export default Story;

