import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalBackdrop,
  ModalContent,
  ModaButtonClose,
  ModalTitle,
  ModalSubTitle,
  ModalDescr,
  AccentDescr,
  ModalInput,
  ModaButtonSend,
} from './ModalForMail.styled.js';
import { ReactComponent as CloseIcon } from './close.svg';

const modalRoot = document.querySelector('#modal-root');

const ModalForMail = ({ toggleModal }) => {
  useEffect(() => {
    const onPressEscape = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', onPressEscape);
    return () => window.removeEventListener('keydown', onPressEscape);
  }, [toggleModal]);

  const onClickOverlay = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={onClickOverlay}>
      <ModalContent>
        <ModaButtonClose type="button" onClick={toggleModal}>
          <CloseIcon />
        </ModaButtonClose>
        <ModalTitle></ModalTitle>
        <ModalSubTitle>
          <AccentDescr>first week of May</AccentDescr>
        </ModalSubTitle>
        <ModalDescr>
         
        </ModalDescr>
        <form>
          <ModalInput placeholder="Email Address" type="text" />
          <ModaButtonSend type="submit">send</ModaButtonSend>
        </form>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
export default ModalForMail;
