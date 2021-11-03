import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';
const Service = ({ service }) => {
    const { name, description, image } = service;
    
    return (
        <Grid  item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, mt:5, boxShadow: 0}}>
            <CardContent>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={image}
                    alt="green iguana"
                />
                <Typography variant="h6" component="div" sx={{my:3}}>
                    {name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {description}
                </Typography>
            </CardContent>
        </Card>
        </Grid>
    );
};

export default Service;