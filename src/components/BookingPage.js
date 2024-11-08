import BookingForm from './BookingForm';

const BookingPage = ({availableTimes, changeAvailableTimes, submitForm}) => (
    <>
        <BookingForm 
            availableTimes={availableTimes}
            changeAvailableTimes={changeAvailableTimes}
            submitForm={submitForm}/>
    </>
);

export default BookingPage;