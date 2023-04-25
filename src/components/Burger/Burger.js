import React, {useContext} from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';
import {Context} from "../App/context";

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;
  const {isOnSlider} = useContext(Context)

  var resizeTimeout;

  window.addEventListener('resize', function(event) {
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        if (window.innerWidth > 768) {
          setOpen(false)
        }
      }, 100);
    }
  }, false);

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      isOnSlider={isOnSlider}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
