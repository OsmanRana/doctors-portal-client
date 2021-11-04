import { Typography } from '@mui/material';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <Typography variant="h3" sx={{ my: 3 }} style={{ color: '#10cfeb' }}>
               Available Appointments on {date.toDateString()}
            </Typography>
        </div>
    );
};

export default AvailableAppointment;