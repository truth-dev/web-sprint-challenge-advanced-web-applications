// Import the Spinner component into this file and test
import React from 'react'
import Spinner from './Spinner';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// that it renders what it should for the different props it can take.

describe('Spinner', () => {

  it('should render Spinner when "on" prop is true', () => {
    const{container, getByText} =render(<Spinner on={true}/>)
    expect(container.querySelector('#spinner')).toBeInTheDocument();
    expect(getByText('Please wait...')).toBeInTheDocument();
  })

})

