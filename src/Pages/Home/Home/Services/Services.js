import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import fluoride from '../../../../images/fluoride.png'
import cavity from '../../../../images/cavity.png'
import whitening from '../../../../images/whitening.png'
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';

const services = [
    {
        id: 1,
        name: "Flouride Treatement",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        image:  fluoride 
    },
    {
        id: 2,
        name: "Cavity Filling",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        image:  cavity 
    },
    {
        id: 3,
        name: "Teeth Whitening",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        image:  whitening 
    }
];


const Services = () => {
    return (
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', my:3 }} style={{color: '#1cc7c1'}}>
                        OUR SERVICES
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', my:3 }} style={{color: '#3a4256'}}>
                        Services We Provide
                    </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                   
                </Grid>
                </Container>
            </Box>
        
    );
};

export default Services;