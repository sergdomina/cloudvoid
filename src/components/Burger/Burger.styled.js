import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 21px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 34px;
    height: 0.1rem;
    background: ${({ theme, open }) =>
      open ? theme.colors.black : theme.colors.dark_grey};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(27deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-27deg)' : 'rotate(0)')};
    }
  }
`;
