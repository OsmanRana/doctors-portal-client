import React from 'react';
import { Typography, Grid, Paper, Button, Box, Modal } from '@mui/material';
import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
};

const BookingOption = ({ bookingOption, date }) => {
    console.log(date)
    const { name, time, spaces } = bookingOption;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleBookingSubmit = e => {
        alert('Booking Completed Successfully')
        handleClose();
        e.preventDefault();
    }

    return (
        <>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ color: '#1cc7c1', fontWeight: 600 }}>
                        {name}
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleBookingSubmit}
                    >
                        <TextField
                            disabled
                            id="outlined-basic"
                            label={time}
                            variant="outlined"

                        />
                        <TextField
                            id="outlined-basic"
                            label="Your name"
                            variant="outlined"
                            type="name"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            type="email"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Phone Number"
                            variant="outlined"
                            type="phone"
                        />
                        <TextField
                            disabled
                            id="outlined-basic"
                            variant="outlined"
                            defaultValue={date.toDateString()}
                        />
                        <Button type="submit" style={{ backgroundImage: 'linear-gradient(to right, #1cc7c1 , #10cfeb)' }} variant="contained">SEND</Button>
                    </Box>
                </Box>
            </Modal>
            <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: '#1cc7c1', fontWeight: 600 }}>
                        {name}
                    </Typography>
                    <Typography gutterBottom>
                        <small>{spaces} SAPCES AVAILABLE</small>
                    </Typography>
                    <Typography gutterBottom sx={{ color: 'gray', fontWeight: 600 }}>
                        {time}
                    </Typography>
                    <Button onClick={handleOpen} style={{ backgroundImage: 'linear-gradient(to right, #1cc7c1 , #10cfeb)' }} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
        </>
    );
};

export default BookingOption;