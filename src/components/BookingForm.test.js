import BookingForm from './BookingForm';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';

describe('BookingForm Component', () => {
    let mockAvailableTimes;
    let mockChangeAvailableTimes;

    beforeEach(() => {
        mockAvailableTimes = ['17:00', '18:00', '19.00', '20:00', '21:00', '22:00'];
        mockChangeAvailableTimes = jest.fn();
        mockSubmitForm = jest.fn();


        render(<BookingForm 
            availableTimes={mockAvailableTimes} 
            changeAvailableTimes={mockChangeAvailableTimes}
            submitForm={mockSubmitForm} />);
    });

    afterEach(cleanup);
    
    test('Renders the book now heading', () => {
        const headingElement = screen.getByText("Book Now");
        expect(headingElement).toBeInTheDocument();
    });
    
    test('Renders the choose time input', () => {
        const timeInput = screen.getByLabelText("Choose time *:");
        expect(timeInput).toBeInTheDocument();
    });

    test('Renders the choose date input', () => {
        const dateInput = screen.getByLabelText("Choose date *:");
        expect(dateInput).toBeInTheDocument();
    });

    test('Renders the number of guests input', () => {
        const guestInput = screen.getByLabelText("Number of guests *:");
        expect(guestInput).toBeInTheDocument();
    });

    test('Renders the occassion input', () => {
    const occassionInput = screen.getByLabelText("Occasion:");
    expect(occassionInput).toBeInTheDocument();
    });

    test('Renders the submit button', () => {
        const submitButton = screen.getByText("Make Your Reservation");
        expect(submitButton).toBeInTheDocument();
    });
});

describe('BookingForm Validations', () => {
    let mockAvailableTimes;
    let mockChangeAvailableTimes;

    beforeEach(() => {
        mockAvailableTimes = ['17:00', '18:00', '19.00', '20:00', '21:00', '22:00'];
        mockChangeAvailableTimes = jest.fn();
        mockSubmitForm = jest.fn();

        render(<BookingForm 
            availableTimes={mockAvailableTimes} 
            changeAvailableTimes={mockChangeAvailableTimes}
            submitForm={mockSubmitForm} />);
    });

    afterEach(cleanup);
    
    test('Test required fields', async () => {
        const submitButton = screen.getByText("Make Your Reservation");
        await waitFor(() => {
            fireEvent.click(submitButton);
            expect(screen.getByText('Date is required')).toBeInTheDocument();
            expect(screen.getByText('Time is required')).toBeInTheDocument();
            expect(screen.getByText('Number of guests is required')).toBeInTheDocument();
        });
    });
    test('Test invalid booking date', async () => {
        const bookingDate = screen.getByLabelText('Choose date *:');
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 10);
        const formattedPastDate = pastDate.toISOString().split('T')[0];        

        await waitFor(() => {
            fireEvent.change(bookingDate, {target : {value: formattedPastDate }});
            fireEvent.blur(bookingDate);
            expect(screen.getByText('Date cannot be in the past')).toBeInTheDocument();
        });
    });

    test('Test invalid number of guests: 1', async () => {
        const guests = screen.getByLabelText('Number of guests *:');

        await waitFor(() => {
            fireEvent.change(guests, {target : {value: "1" }});
            fireEvent.blur(guests);
            expect(screen.getByText('Must have at least 2 guests')).toBeInTheDocument();
        });
    });

    test('Test invalid number of guests: 11', async () => {
        const guests = screen.getByLabelText('Number of guests *:');

        await waitFor(() => {
            fireEvent.change(guests, {target : {value: "11" }});
            fireEvent.blur(guests);
            expect(screen.getByText('Cannot exceed 10 guests')).toBeInTheDocument();
        });
    });
});