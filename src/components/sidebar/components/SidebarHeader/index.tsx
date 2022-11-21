import React from 'react';
import { IconButton, Link } from '@mui/material';
import { SCREENS } from '../../../../utils/screens';
import { Container } from './styles';
import HeaderLogo from '../../../../assets/light-logo.svg';
import { MenuRounded } from '@mui/icons-material';

type Props = {
  handleOpenClick(): void;
};

const SideBarHeader = ({ handleOpenClick }: Props) => (
  <Container>
    <IconButton onClick={handleOpenClick}>
      <MenuRounded fontSize={'large'} style={{ color: '#fff' }} />
    </IconButton>

    <Link href={SCREENS.HOME} style={{ marginRight: '35px' }}>
      <img src={HeaderLogo} alt={'Super Monitoria'} width="146px" />
    </Link>

    <div></div>
  </Container>
);

export default SideBarHeader;
