import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import OrderPage from './OrderPage';
import BookingPage from './BookingPage';
import LoginPage from './LoginPage';
import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';

const Main = () => {
    const initializeTimes =  ['17:00', '18:00', '19.00', '20:00', '21:00', '22:00'];
    const updateTimes = (state, {bookingTime, bookingDate}) => {
        const newTimes = state.filter(time => time !== bookingTime);
        alert(`New Times after filtering: ${newTimes}`);        
        return newTimes;
    }
    const [availableTimes, changeAvailableTimes] = useReducer(updateTimes, initializeTimes);

    return (
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage 
            availableTimes={availableTimes}
            changeAvailableTimes={changeAvailableTimes}/>}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/order" element={<OrderPage />}></Route> 
    </Routes>
)};
export default Main;