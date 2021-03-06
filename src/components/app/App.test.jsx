import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterAll(() => cleanup());

  it('renders App, displays color picker and buttons', () => {
    const app = render(<App />);

    const red = '#ff0000';
    const blue = '#0000ff';
    const yellow = '#ffff00';
    const green = '#00ff00';

    const colorPicker = app.getByLabelText('color-picker');
    const undo = screen.getByRole('undo');
    const redo = screen.getByRole('redo');


    fireEvent.change(colorPicker, { target: { value: red } }); //change to red
    fireEvent.change(colorPicker, { target: { value: blue } }); //change to blue
    fireEvent.change(colorPicker, { target: { value: green } }); //change to green
    fireEvent.click(undo); //change to blue
    fireEvent.click(undo); //change to red
    fireEvent.click(redo); //change to blue
    fireEvent.change(colorPicker, { target: { value: yellow } }); //change to yellow
    fireEvent.click(undo);
    fireEvent.click(redo);
    fireEvent.click(redo);
    fireEvent.click(undo);

    expect(colorPicker.value).toBe(green);
  });
});
