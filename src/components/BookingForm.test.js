import BookingForm from './BookingForm';
import { render, screen } from '@testing-library/react';

test('Renders the BookingForm', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19.00', '20:00', '21:00', '22:00'];
    const mockChangeAvailableTimes = jest.fn();

    render(<BookingForm availableTimes={mockAvailableTimes} changeAvailableTimes={mockChangeAvailableTimes} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();

    const timeInput = screen.getByLabelText("Choose time *:");
    expect(timeInput).toBeInTheDocument();

    const dateInput = screen.getByLabelText("Choose date *:");
    expect(dateInput).toBeInTheDocument();

    const guestInput = screen.getByLabelText("Number of guests *:");
    expect(guestInput).toBeInTheDocument();

    const occassionInput = screen.getByLabelText("Occassion:");
    expect(occassionInput).toBeInTheDocument();

    const submitButton = screen.getByText("Make Your reservation");
    expect(submitButton).toBeInTheDocument();
})