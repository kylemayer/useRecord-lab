import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterAll(() => cleanup());

  it('renders App, displays color picker and buttons', () => {
    const app = render(<App />);

    const red = '#ff0000';
    // const blue = '#0000ff';
    // const yellow = '#ffff00';
    // const green = '#00ff00';

    const colorPicker = app.getByLabelText('color-picker');
    expect(colorPicker.value).toBe(red);

  });
});
