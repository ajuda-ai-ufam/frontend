import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Button } from '../../components/button';

export const Container = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 0 16px !important;
  }
`;
export const HeaderContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: flex;
    margin-top: 16px;
    margin-bottom: 16px;
    align-items: start;
    justify-content: flex-start;
  }
`;
export const EditButton = styled(Button).attrs({
  color: 'primary',
  variant: 'contained',
  width: '209px',
  height: '44px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 118px !important;
  }
`;

export const SubHeaderLeftContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h3 {
    width: 50%;
  }
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: flex;
    align-items: start;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;
export const SubHeaderRightContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: flex;
    height: 100%;
    align-items: start;
  }
`;

export const Card = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  padding: '32px',
  width: '1128px',
  margin: '24px',
  backgroundColor: 'white',
})`
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 100% !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    padding: 0 !important;
    margin: 16px 0 !important;
    box-shadow: none;
  }
`;
