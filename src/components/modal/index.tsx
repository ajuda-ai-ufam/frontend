import { Modal as MuiMiodal } from '@mui/material';
import React from 'react';
import { Container } from './styles';

type Props = {
  isOpen: boolean;
  handleClose(): void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, handleClose, children }: Props) => (
  <MuiMiodal open={isOpen} onClose={handleClose}>
    <Container>{children}</Container>
  </MuiMiodal>
);

export default Modal;
