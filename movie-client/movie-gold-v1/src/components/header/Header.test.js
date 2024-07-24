import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for better assertions
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('renders the Header component', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
    expect(screen.getByText('Gold')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Watch List')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
    expect(screen.getByLabelText('Toggle navigation')).toBeInTheDocument();
});

test('nav links have correct href', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
    expect(screen.getByText('Gold').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Watch List').closest('a')).toHaveAttribute('href', '/watchlist');
});
