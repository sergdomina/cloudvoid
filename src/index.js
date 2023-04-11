import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';
import App from './components/App/App';
import { theme } from './constants/theme';
import GlobalFonts from './fonts/fonts.styled';
import 'modern-normalize/modern-normalize.css';
import {createRoot} from 'react-dom/client';
import {ScrollToTop} from "./hooks/ScrollToTop";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

if (process.env.NODE_ENV !== "development") {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
}

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <ThemeProvider theme={theme}>
                <ChakraProvider>
                    <GlobalFonts />
                    <App />
                </ChakraProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);