import { Modal as MuiMiodal } from '@mui/material';
import React from 'react';
import { Container } from './styles';

type Props = {
  isOpen: boolean;
  width?: string;
  handleClose(): void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, width, handleClose, children }: Props) => (
  <MuiMiodal open={isOpen} onClose={handleClose}>
    <Container maxWidth={width}>{children}</Container>
  </MuiMiodal>
);

export default Modal;
