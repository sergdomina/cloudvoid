import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 100%;
    height: 1px;
    background: ${({ theme, open }) =>
      open ? theme.colors.black : theme.colors.dark_grey};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: left;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(27deg)' : 'rotate(0)')};
      // for straight cross
      // transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      // left: ${({ open }) => (open ? '4px' : '0')};
      // top: ${({ open }) => (open ? '-4px' : '0')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'rotate(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-27deg)' : 'rotate(0)')};
      // for straight cross
      // transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      // left: ${({ open }) => (open ? '4px' : '0')};
      // bottom: ${({ open }) => (open ? '-4px' : '0')};
    }
  }
`;
