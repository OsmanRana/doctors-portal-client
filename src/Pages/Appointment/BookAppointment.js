import { Container, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import bg from '../../images/bg.png';
import chair from '../../images/chair.png';
import Calender from '../Calender/Calender';

const topBanner = {
    background: `url(${bg})`,
    width: '100%',
    height: '1000px',
    backgroundRepeat: 'no-repeat',
    marginTop: '-300px',

}

const BookAppointment = ({date, setDate}) => {
    
    return (
        <Container>
            <Box style={topBanner} sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Container sx={{mt:10}}>
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
                                
                            }}>

                                <Typography variant="h3" sx={{ fontWeight: 'bold', my: 3 }} style={{ color: '#3a4256' }}>
                                    Appointment
                                </Typography>
                                <Calender date={date} setDate={setDate}></Calender>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ mt: 8, }}>
                            <img src={chair} alt="" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Container>
    );
};

export default BookAppointment;