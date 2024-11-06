import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Main from './Main';
import { MemoryRouter } from 'react-router-dom';

describe('BookingForm Component', () => {
    beforeEach(() => {
        render( 
        <MemoryRouter initialEntries={['/booking']}>
            <Main />
        </MemoryRouter>);
    });
    afterEach(cleanup);

    test('Test the initializeTimes', () => {
        const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        availableTimes.forEach(time => expect(screen.getByText(time)).toBeInTheDocument());
    });

    test('Test the changeAvailableTimes function', () => {
        expect(screen.getByText('19:00')).toBeInTheDocument();

        const dateInput = screen.getByLabelText(/choose date/i);
        fireEvent.change(dateInput, { target: { value: '2024-11-15' } });

        // Simulate user selecting a time
        const timeSelect = screen.getByLabelText(/choose time/i);
        fireEvent.change(timeSelect, { target: { value: '19:00' } });

        // Simulate form submission
        const submitButton = screen.getByText(/make your reservation/i);
        fireEvent.click(submitButton);

        expect(screen.queryByText('19:00')).toBeNull();
        expect(screen.getByText('20:00')).toBeInTheDocument();
        expect(screen.getByText('17:00')).toBeInTheDocument();
    });
});


