import { Button, Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useHistory } from 'react-router';
import bg from '../../../../images/appointment-bg.png';
import doctor from '../../../../images/doctor.png';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    const history = useHistory()
    const handleAppointment = () => {
        history.push('/appointment')
    }
    return (
        <Container>
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <img style={{ width: '90%', marginTop: -110, marginBottom: -4 }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={7}  sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left',
                        
                    }}>

                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', my: 3 }} style={{ color: '#1cc7c1' }}>
                                APPOINTMENT
                            </Typography>
                            <Typography variant="h3" sx={{ my: 3 }} style={{ color: 'white' }}>
                                Make an Appointment  Today
                            </Typography>
                            <Typography sx={{ fontSize: 14, my: 3 }} style={{ color: 'white' }} gutterBottom>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates sit iste, sed libero aut, totam tempora quam rerum odio iure necessitatibus molestiae, tenetur dolor accusantium.
                            </Typography>
                            <Button onClick={handleAppointment} style={{ backgroundImage: 'linear-gradient(to right, #1cc7c1 , #10cfeb)' }} variant="contained">Book Appointment</Button>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentBanner;