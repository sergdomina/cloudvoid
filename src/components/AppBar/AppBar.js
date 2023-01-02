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
import LogoSeeYouMobile from '../../image/Cloudvoid_LO_FF-03.svg';
import LogoSeeYou from '../../image/Cloudvoid_LO_FF-03.svg';
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
                <LogoImg src={LogoSeeYouMobile} alt={'Logo SeeYou'} />
              </LogoLink>
            </MediaQuery>
            <MediaQuery device={'tablet'}>
              <LogoLink onClick={() => setIsOpenMobileMenu(false)} to="/">
                <LogoImg src={LogoSeeYou} alt={'Logo SeeYou'} />
              </LogoLink>
            </MediaQuery>
            <MediaQuery device={'default'}>
              <LogoLink onClick={() => setIsOpenMobileMenu(false)} to="/">
                <LogoImg src={LogoSeeYou} alt={'Logo SeeYou'} />
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
                <a>
                  Services
                  </a>
              </NavItem>
              <NavItem>
              <a>
                  About
                  </a>
              </NavItem>
              <NavItem>
              <a>
                  Contact
                  </a>
              </NavItem>
              {/*<NavItem>
                <PopupHeader />
              </NavItem> */}
            </NavList>
          </Nav>

          {/* {isDownloadPage && (
            <MediaQuery device={'mobile'}>
              <DownloadMobileFooter>
                <LinkDown to="/downloads" onClick={toggleMenu}>
                  <DownloadLink>Download</DownloadLink>
                </LinkDown>
              </DownloadMobileFooter>
            </MediaQuery>
          )}
          {isDownloadPage && (
            <MediaQuery device={'tablet'}>
              <DownloadMobileFooter>
                <LinkDown to="/downloads" onClick={toggleMenu}>
                  <DownloadLink>Download</DownloadLink>
                </LinkDown>
              </DownloadMobileFooter>
            </MediaQuery>
          )} */}

          {/* <DownHeadDiv> */}
          {/*<MediaQuery device={'default'}>
            <LinkDown to="/downloads" onClick={toggleMenu}>
              <DownloadLink>Download</DownloadLink>
            </LinkDown>
          </MediaQuery>*/}
          {/* </DownHeadDiv> */}
        </HeaderContainer>
        {/*{showModal && <ModalForMail toggleModal={toggleModal} />}*/}
      </Header>
    </>
  );
};
export default AppBar;
