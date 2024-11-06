import BookingForm from './BookingForm';

const BookingPage = ({availableTimes, changeAvailableTimes}) => (
    <>
        <BookingForm 
            availableTimes={availableTimes}
            changeAvailableTimes={changeAvailableTimes}/>
    </>
);

export default BookingPage;