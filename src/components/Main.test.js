import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import Main from './Main';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { submitAPI, fetchAPI } from './api';

jest.mock('./api.js', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn()
}));

describe('BookingForm Component', () => {
    beforeEach(() => {
        submitAPI.mockClear();
        fetchAPI.mockClear();
        useNavigate.mockClear();
    });
    afterEach(cleanup);

    test('Test the initializeTimes', () => {
        const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        fetchAPI.mockReturnValueOnce(initialTimes);
        render( 
            <MemoryRouter initialEntries={['/booking']}>
                <Main />
            </MemoryRouter>);
        initialTimes.forEach(time => expect(screen.getByText(time)).toBeInTheDocument());
    });

    test('Test the changeAvailableTimes function', async () => {
        const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        fetchAPI.mockReturnValueOnce(initialTimes);
        render( 
            <MemoryRouter initialEntries={['/booking']}>
                <Main />
            </MemoryRouter>);

        initialTimes.forEach(time => {
            expect(screen.getByText(time)).toBeInTheDocument()});
        const newTimes = ['20:30', '21:30', '22:30'];
        fetchAPI.mockReturnValueOnce(newTimes);
        const dateInput = screen.getByLabelText("Choose date *:");       

        await waitFor(() => {
            fireEvent.change(dateInput, { target: { value: '2024-11-17' } });
            newTimes.forEach(time => expect(screen.getByText(time)).toBeInTheDocument());
            initialTimes.forEach(time => expect(screen.queryByText(time)).toBeNull());
        });

    });
});


