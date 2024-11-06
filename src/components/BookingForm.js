import './BookingForm.css';
import {useState} from "react"; 

const BookingForm = ({availableTimes, changeAvailableTimes}) => {
    const [bookingDate, setBookingDate] = useState("");
    const [bookingTime, setBookingTime] = useState("");
    const [numGuests, setNumGuests] = useState(1);
    const [occassion, setOccassion] = useState("");

    const handleSubmit = e => {
        e.preventDefault()
        changeAvailableTimes({bookingTime, bookingDate});}

    return (
        <>
            <h1>Book Now</h1>
            <form 
            id='booking-form'
            onSubmit={handleSubmit}>
            <label>
                Choose date <sup>*</sup>:
                <input 
                    type='date' 
                    id='res-date'
                    value={bookingDate}
                    onChange={e=>setBookingDate(e.target.value)}/>
            </label>
            <label>
                Choose time <sup>*</sup>:
                <select 
                    id="res-time"
                    value={bookingTime}
                    onChange={e=>{setBookingTime(e.target.value);}}>
                    {availableTimes.map((time, index) => 
                        (<option key={index} value={time}>{time}</option>))}
                </select>
            </label>
            <label>
                Number of guests <sup>*</sup>:
                <input 
                    type='number' 
                    placeholder='1' 
                    min='1' 
                    max='10' 
                    id='guests'
                    value={numGuests}
                    onChange={e=>setNumGuests(e.target.value)}/>
            </label>
            <label>
                Occassion:
                <select 
                    id="occasion"
                    value={occassion}
                    onChange={e=>setOccassion(e.target.value)}>
                    <option>Anniversary</option>
                    <option>Birthday</option>
                </select>
            </label>
            <button type='submit'>Make Your reservation</button>
        </form>
    </>)};

export default BookingForm;