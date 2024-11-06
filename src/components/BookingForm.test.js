import BookingForm from './BookingForm';
import { render, screen, cleanup } from '@testing-library/react';

describe('BookingForm Component', () => {
    let mockAvailableTimes;
    let mockChangeAvailableTimes;

    beforeEach(() => {
        mockAvailableTimes = ['17:00', '18:00', '19.00', '20:00', '21:00', '22:00'];
        mockChangeAvailableTimes = jest.fn();

        render(<BookingForm availableTimes={mockAvailableTimes} changeAvailableTimes={mockChangeAvailableTimes} />);
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
    const occassionInput = screen.getByLabelText("Occassion:");
    expect(occassionInput).toBeInTheDocument();
    });

    test('Renders the submit button', () => {
        const submitButton = screen.getByText("Make Your reservation");
        expect(submitButton).toBeInTheDocument();
    });
});