import { Container, Typography, Grid } from '@mui/material';

import React from 'react';
import BookingOption from './BookingOption';

const bookingOptions = [
    {
        id: 1,
        name: 'Theeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        spaces: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:00 AM - 11:30 AM',
        spaces: 10
    },
    {
        id: 3,
        name: 'Theeth Cleaning',
        time: '8500 PM - 6:00 PM',
        spaces: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7:00 AM - 8:30 AM',
        spaces: 10
    },
    {
        id: 5,
        name: 'Theeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        spaces: 10
    },
    {
        id: 6,
        name: 'Theeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        spaces: 10
    },
]

const AvailableAppointment = ({ date }) => {
    return (
        <Container sx={{ my: 10 }}>
            <Typography variant="h3" sx={{ my: 5 }} style={{ color: '#1cc7c1' }}>
                Available Appointments on <span style={{ color: '#3a4256', fontWeight: 'bold' }}>{date.toDateString()}</span>
            </Typography>
            
                <Grid  container spacing={{ xs: 2, md: 3 }}>
                    
                        {
                            bookingOptions.map(bookingOption => <BookingOption
                                key={bookingOption.id}
                                bookingOption={bookingOption}
                                date={date}
                            ></BookingOption>)
                        }
                    
                </Grid>
           
        </Container>


    );
};

export default AvailableAppointment;