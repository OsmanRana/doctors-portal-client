
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';

import DentalCare from './DentalCare/DentalCare';
import Services from './Services/Services';
import TopBanner from './TopBanner/TopBanner';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation> 
            <TopBanner></TopBanner>
            <Services></Services>  
            <DentalCare></DentalCare> 
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;