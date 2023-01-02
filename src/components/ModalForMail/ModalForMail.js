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
        <ModalTitle>SEEYOU Limited Release Version 1.0.1</ModalTitle>
        <ModalSubTitle>
          will be available for download and in the App Store and on Google
          Play, the <AccentDescr>first week of May</AccentDescr>. Open release
          is on July 1st
        </ModalSubTitle>
        <ModalDescr>
          Please enter your email below to be the first to get the limited
          release download links when SEEYOU is available in the App Store and
          Google Play
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
