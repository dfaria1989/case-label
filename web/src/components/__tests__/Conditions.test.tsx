import React from "react";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Conditions from "../Conditions";

test('No conditions available is showed', () => {
    render(<Conditions/>)
    expect(screen.getByTestId('DropdownConditions')).toHaveTextContent('No conditions available!')
  })
  
