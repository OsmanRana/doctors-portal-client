import { Container, Box, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import bg from '../../../../images/bg.png';
import chair from '../../../../images/chair.png';

const topBanner = {
    background: `url(${bg})`,
    width: '100%',
    height: '1000px',
    backgroundRepeat: 'no-repeat',
    marginTop: '-300px',

}

const TopBanner = () => {
    return (
        <Container>
            <Box style={topBanner} sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Container>
                    <Grid container spacing={2} sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        marginTop: '200px'
                    }}>
                        <Grid item xs={12} md={6}
                            sx={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                textAlign: 'left',
                            }}>
                            <Box sx={{
                                pl: 5
                            }}>

                                <Typography variant="h3" sx={{ fontWeight: 'bold', my: 3 }} style={{ color: '#3a4256' }}>
                                    Your New Smile Starts Here
                                </Typography>
                                <Typography sx={{ fontSize: 14, lineHeight: 2, my: 3 }} style={{ color: '#3a4256' }} gutterBottom>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est saepe voluptatibus repudiandae adipisci quia at placeat exercitationem,
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </Typography>
                                <Button style={{ backgroundImage: 'linear-gradient(to right, #1cc7c1 , #10cfeb)' }} variant="contained">GET APPOINTMENT</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ mt: 8, }}>
                            <img src={chair} alt="" style={{ width: '75%' }} />
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </Container>
    );
};

export default TopBanner;