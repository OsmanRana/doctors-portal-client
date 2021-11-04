
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Appointment from '../Appointment/Appointment/Appointment';
import DentalCare from '../DentalCare/DentalCare';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation> 
            <Services></Services>  
            <DentalCare></DentalCare> 
            <Appointment></Appointment>
        </div>
    );
};

export default Home;