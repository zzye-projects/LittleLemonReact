import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import OrderPage from './OrderPage';
import BookingPage from './BookingPage';
import LoginPage from './LoginPage';
import ConfirmedBooking from './ConfirmedBooking.js';
import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from './api.js';
import {useNavigate} from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const initializeTimes = () => fetchAPI(new Date());
    const updateTimes = (state, {bookingDate}) => fetchAPI(new Date(bookingDate));

    const submitForm = (formdata) => {
        const result = submitAPI(formdata);
        if(result) { navigate("/confirmed-booking")};
    }
    const [availableTimes, changeAvailableTimes] = useReducer(updateTimes, undefined, initializeTimes);

    return (
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage 
            availableTimes={availableTimes}
            changeAvailableTimes={changeAvailableTimes}
            submitForm={submitForm}/>}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route> 
    </Routes>
)};
export default Main;