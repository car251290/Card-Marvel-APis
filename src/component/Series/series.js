import React from 'react';
import { Card,CardContent,Typography } from '@mui/material';
const MarvelSeries = ({series}) => {
if(!series){
    return null;
}

return (
    <Card>
        <CardContent>
            <Typography variant="h5" component="div">
                {series.title}
            </Typography>
                 {series.description && (
                    <Typography variant="body2" color="textSecondary">
                    {series.description || "No description available"}
                </Typography>
            )}
        </CardContent>
    </Card>
);

}

export default MarvelSeries;


