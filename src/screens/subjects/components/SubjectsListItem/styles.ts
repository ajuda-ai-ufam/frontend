import { Card, CardActions, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { Button } from '../../../../components/button';
import theme from '../../../../utils/theme';

type Props = {
  wid: string;
  color: string;
};

export const StyledCard = styled(Card).attrs({
  width: '100%',
})`
  background-color: ${theme.palette.background.default} !important;
  border-radius: 24px !important;
  padding: 16px 24px;

  :hover {
    background-color: ${theme.palette.grey[200]} !important;
    cursor: pointer;
    transition: 0.8s;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 8px 16px !important;
  }
`;

export const Container = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column !important;
  }
`;

export const ActionButton = styled(Button).attrs(({ wid, color }: Props) => ({
  color: color,
  variant: 'outlined',
  width: wid,
}))<Props>`
  :hover {
    background-color: ${(props) =>
      props.color === 'primary'
        ? theme.palette.primary.main
        : theme.palette.secondary.main} !important;
    color: white;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const ButtonContainer = styled(CardActions)`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const SubjectName = styled(Typography).attrs({
  variant: 'h6',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    text-align: center !important;
  }
`;
