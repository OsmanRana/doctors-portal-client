import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AvailableAppointment from './AvailableAppointment';
import BookAppointment from './BookAppointment';


const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <BookAppointment date={date} setDate={setDate}></BookAppointment>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;