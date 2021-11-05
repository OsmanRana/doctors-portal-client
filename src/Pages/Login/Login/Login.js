import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleLoginSubmit = e => {
        e.preventDefault();
    }

    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value)
    };


    return (
        <Container sx={{ my: 5, pr: 0 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} sx={{ my: 'auto', boxShadow: 1, pr: 4, pb: 4 }}>
                    <Typography variant="h5" gutterBottom component="div">
                        Login
                    </Typography>

                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            style={{ width: '100%' }}
                            id="standard-basic-email"
                            label="Your Email"
                            variant="standard"
                            type="email"
                            name="email"
                            onBlur={handleonBlur}
                        />
                        <TextField
                            style={{ width: '100%' }}
                            id="standard-basic-password"
                            label="Passrword"
                            variant="standard"
                            name="password"
                            type="password"
                            onBlur={handleonBlur}
                        />
                        <Button type="submit" style={{ backgroundImage: 'linear-gradient(to right, #1cc7c1 , #10cfeb)' }} sx={{ width: '100%', mt: 5 }} variant="contained">Login</Button>
                    </form>

                </Grid>
                <Grid item xs={12} md={6} sx={{ pr: 4, pb: 4 }}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;