import './BookingForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookingForm = ({availableTimes, changeAvailableTimes, submitForm}) => {
    const initialValues = {
        bookingDate: "",
        bookingTime: "",
        numGuests: 1,
        occasion: ""
    };
    const validationSchema = Yup.object({
        bookingDate: Yup.date()
            .required('Date is required')
            .min(new Date(), 'Date cannot be in the past'),
        bookingTime: Yup.string()
            .required('Time is required'),
        numGuests: Yup.number()
            .required('Number of guests is required')
            .min(1, 'Must have at least 1 guest')
            .max(10, 'Cannot exceed 10 guests'),
        occasion: Yup.string().oneOf(['Anniversary', 'Birthday'], 'Invalid occasion')
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log("Formik onSubmit called with values:", values);
                submitForm(values);
                setSubmitting(false);
            }}>
            {({ values, setFieldValue, isSubmitting }) => (            
                <Form id='booking-form'>
                <h1>Book Now</h1>
                <label>
                    Choose date <sup>*</sup>:
                    <Field 
                        type='date' 
                        id='res-date'
                        name='bookingDate'
                        onChange={e=>{
                            setFieldValue("bookingDate", e.target.value);
                            changeAvailableTimes({'bookingDate': e.target.value});
                        }}/>
                    <ErrorMessage name='bookingDate' component='div' className='error' />
                </label>
                <label>
                    Choose time <sup>*</sup>:
                    <Field 
                        id="res-time"
                        as="select"
                        name='bookingTime'>
                        <option value="" label="Select booking time" />
                        {availableTimes.map((time, index) => 
                            (<option key={index} value={time}>{time}</option>))}
                    </Field>
                    <ErrorMessage name="bookingTime" component="div" className="error" />
                </label>
                <label>
                    Number of guests <sup>*</sup>:
                    <Field 
                        type="number" 
                        name="numGuests" 
                        placeholder='1' 
                        min="1" 
                        max="10" />
                    <ErrorMessage name="numGuests" component="div" className="error" />
                </label>
                <label>
                    Occassion:
                    <Field as="select" name="occasion">
                            <option value="" label="Select occasion" />
                            <option value="anniversary" label="Anniversary" />
                            <option value="birthday" label="Birthday" />
                        </Field>
                    <ErrorMessage name="occasion" component="div" className="error" />
                </label>
                <button type='submit' disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Make Your Reservation"}
                </button></Form>)}
        </Formik>)};

export default BookingForm;