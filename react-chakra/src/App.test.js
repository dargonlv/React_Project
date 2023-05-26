import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom"
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

test('api kontrol', () => {
    const {getByPlaceholderText,debug,container}= render(
    <BrowserRouter>
    <ChakraProvider>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
    </ChakraProvider>
    </BrowserRouter>
    )
     
    fireEvent.change(getByPlaceholderText("Search"),{target: {value:"car"}})
    expect(getByPlaceholderText("Search")).toBeInTheDocument()
    expect(container.querySelector(".sag")).not.toBeEmptyDOMElement()
    expect(container.querySelector(".sag").firstChild).tohaveclass(".chakra-card")
    console.log("//222/",container.querySelectorAll(".chakra-card").length)
});
