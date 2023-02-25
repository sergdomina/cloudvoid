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
  NavSubList,
  HeaderBox,
  LogoLink,
  HeaderContainer, ArrowButton, ButtonNavSubList,
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
  const [isOpenSubList, setIsOpenSubList] = useState({
    service: false
  });
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
                <ButtonNavSubList
                  direction={'right'}
                  onClick={() => {
                  setIsOpenSubList((state) => {
                    return {
                      ...state,
                      service: true
                    }
                  })
                }}>
                  Services
                  <ArrowButton direction={'right'}/>
                </ButtonNavSubList>

                <NavSubList className={isOpenSubList.service && 'active'}>
                  <MediaQuery device={'mobile'}>
                    <NavItem>
                      <ButtonNavSubList
                        direction={'left'}
                        onClick={() => {
                        setIsOpenSubList((state) => {
                          return {
                            ...state,
                            service: false
                          }
                        })
                      }}>
                        <ArrowButton direction={'left'}/>
                        Back
                      </ButtonNavSubList>
                    </NavItem>
                  </MediaQuery>

                  <NavItem>
                    <Link to="/cloud-evolve"><p>Cloud Evolve</p></Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/cloud-governance"><p>Cloud Governance</p></Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/cloud-migration"><p>Cloud Migration</p></Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/cloud-solutions-architecture"><p>Cloud Solutions Architecture</p></Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/cloud-ai-and-analytics"><p>Cloud AI & Analytics</p></Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/smart-devops"><p>Smart DevOps</p></Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/smart-infractructure"><p>Smart Infrastructure</p></Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/master-msp"><p>Master MSP</p></Link>
                  </NavItem>
                </NavSubList>

                <PopupHeader />
              </NavItem>

              <NavItem>
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/contact" onClick={toggleMenu}>
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
