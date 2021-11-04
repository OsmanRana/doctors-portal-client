import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../../../images/treatment.png'
import Box from '@mui/material/Box';

const DentalCare = () => {
    return (
        <Container>
            <Grid container spacing={1} sx={{my:5}}>
                <Grid item xs={12} md={6}>
                    <img src={treatment} alt="" style={{
                        width: '75%'
                    }}/>
                </Grid>
                <Grid item xs={12} md={6}
                sx= {{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        
                        <Typography variant="h3" sx={{ my: 3 }} style={{ color: '#3a4256' }}>
                            Exceptional Dental Care, on your Terms
                        </Typography>
                        <Typography sx={{ fontSize: 14,lineHeight: 2, my: 3 }} style={{ color: '#3a4256' }} gutterBottom>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est saepe voluptatibus repudiandae adipisci quia at placeat exercitationem, perspiciatis dignissimos sunt itaque fugit, praesentium amet eligendi expedita reprehenderit atque esse nostrum eos voluptate consequatur totam. Quisquam voluptas repellat labore sapiente esse impedit, mollitia itaque? Dignissimos impedit minus quas repudiandae nam ipsum?
                        </Typography>
                        <Button style={{ backgroundImage: 'linear-gradient(to right, #1cc7c1 , #10cfeb)' }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    );
};

export default DentalCare;