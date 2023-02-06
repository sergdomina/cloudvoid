import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import {
  Nav,
  Link,
  Header,
  LogoImg,
  NavItem,
  NavList,
  HeaderBox,
  LogoLink,
  HeaderContainer,
  // DownHeadDiv,
} from './AppBar.styled';
// import { Container } from '../Container/Container.styled';
import Burger from '../Burger';
import LogoMobile from '../../image/Cloudvoid_LO_FF-03.svg';
import Logo from '../../image/Cloudvoid_LO_FF-03.svg';
import { useOnClickOutside } from '../../hooks/OnClickOutside';
import MediaQuery from '../MediaQuery';
// import DownloadLink from '../DownloadLink';
// import ModalForMail from '../ModalForMail';
import PopupHeader from '../PopupHeader';
// import DownloadMobileFooter from '../DownloadMobileFooter';
// import styles from './style.modules.css';

const AppBar = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };
  const node = useRef();

  useOnClickOutside(node, () => toggleMenu(false), isOpenMobileMenu);

  // const [showModal, setShowModal] = useState(false);
  // const toggleModal = () => setShowModal(!showModal);
  const { pathname } = useLocation();
  const isDownloadPage = pathname !== '/downloads';
  return (
    <>
      <GlobalStyle isDownloadPage={!isDownloadPage} />
      <Header ref={node}>
        <HeaderContainer>
          <HeaderBox>
            <MediaQuery device={'mobile'}>
              <Burger
                open={isOpenMobileMenu}
                setOpen={toggleMenu}
                aria-expanded={isOpenMobileMenu}
                type="button"
              />
            </MediaQuery>
            <MediaQuery device={'mobile'}>
              <LogoLink onClick={() => setIsOpenMobileMenu(false)} to="/">
                <LogoImg src={LogoMobile} alt={'Cloudvoid'} />
              </LogoLink>
            </MediaQuery>
            <MediaQuery device={'tabletUp'}>
              <LogoLink onClick={() => setIsOpenMobileMenu(false)} to="/">
                <LogoImg src={Logo} alt={'Cloudvoid'} />
              </LogoLink>
            </MediaQuery>
          </HeaderBox>
          <Nav className={isOpenMobileMenu && 'active'}>
            <NavList>
              <NavItem>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </NavItem>

              <NavItem>
                <PopupHeader /> 
              </NavItem>
              <NavItem>
              <Link to="/about" onClick={toggleMenu}>
                  About
                  </Link>
              </NavItem>
              <NavItem>
              <Link to="/about" onClick={toggleMenu}>
                  Contact
                  </Link>
              </NavItem>
            </NavList>
          </Nav>

        </HeaderContainer>
        {/*{showModal && <ModalForMail toggleModal={toggleModal} />}*/}
      </Header>
    </>
  );
};
export default AppBar;
