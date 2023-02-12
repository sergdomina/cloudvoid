
import { createGlobalStyle } from 'styled-components';

import Montserrat_Bold from '../fonts/Montserrat-Bold/Montserrat-Bold.woff';
import Montserrat_Bold2 from '../fonts/Montserrat-Bold/Montserrat-Bold.woff2';

import Montserrat_SemiBold from '../fonts/Montserrat-SemiBold/Montserrat-SemiBold.woff';
import Montserrat_SemiBold2 from '../fonts/Montserrat-SemiBold/Montserrat-SemiBold.woff2';

import Poppins_Regular from '../fonts/Poppins-Regular/Poppins-Regular.woff';
import Poppins_Regular2 from '../fonts/Poppins-Regular/Poppins-Regular.woff2';

import Poppins_SemiBold from '../fonts/Poppins-SemiBold/Poppins-SemiBold.woff';
import Poppins_SemiBold2 from '../fonts/Poppins-SemiBold/Poppins-SemiBold.woff2';

import Poppins_Bold from '../fonts/Poppins-Bold/Poppins-Bold.woff';
import Poppins_Bold2 from '../fonts/Poppins-Bold/Poppins-Bold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat_Bold';
        src: local('Montserrat_Bold'), local('Montserrat_Bold'),
        url(${Montserrat_Bold2}) format('woff2'),
        url(${Montserrat_Bold}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins_Regular';
        src: local('Poppins_Regular'), local('Poppins_Regular'),
        url(${Poppins_Regular2}) format('woff2'),
        url(${Poppins_Regular}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins_SemiBold';
        src: local('Poppins_SemiBold'), local('Poppins_SemiBold'),
        url(${Poppins_SemiBold2}) format('woff2'),
        url(${Poppins_SemiBold}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins_Bold';
        src: local('Poppins_Bold'), local('Poppins_Bold'),
        url(${Poppins_Bold2}) format('woff2'),
        url(${Poppins_Bold}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
`;
