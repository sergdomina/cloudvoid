
import { createGlobalStyle } from 'styled-components';

import Jost_Bold from '../fonts/Jost-Bold/Montserrat-Bold.woff';
import Jost_Bold2 from '../fonts/Jost-Bold/Montserrat-Bold.woff2';

import OpenSans_Regular from '../fonts/OpenSans-Regular/Poppins-Regular.woff2';
import OpenSans_Regular2 from '../fonts/OpenSans-Regular/Poppins-Regular.woff';

import OpenSans_SemiBold from '../fonts/OpenSans-SemiBold/OpenSans-SemiBold.woff';
import OpenSans_SemiBold2 from '../fonts/OpenSans-SemiBold/OpenSans-SemiBold.woff2';

import OpenSans_Bold from '../fonts/OpenSans-Bold/Poppins-Bold.woff';
import OpenSans_Bold2 from '../fonts/OpenSans-Bold/Poppins-Bold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Jost_Bold';
        src: local('Jost_Bold'), local('Jost_Bold'),
        url(${Jost_Bold2}) format('woff2'),
        url(${Jost_Bold}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'OpenSans_Regular';
        src: local('OpenSans_Regular'), local('OpenSans_Regular'),
        url(${OpenSans_Regular2}) format('woff2'),
        url(${OpenSans_Regular}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'OpenSans_SemiBold';
        src: local('OpenSans_SemiBold'), local('OpenSans_SemiBold'),
        url(${OpenSans_SemiBold2}) format('woff2'),
        url(${OpenSans_SemiBold}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'OpenSans_Bold';
        src: local('OpenSans_Bold'), local('OpenSans_Bold'),
        url(${OpenSans_Bold2}) format('woff2'),
        url(${OpenSans_Bold}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
`;
