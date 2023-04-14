import { Chip } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const MonitorsContainer = styled(Box).attrs({
  display: 'grid',
  gap: '16px',
  flexWrap: 'wrap',
  marginTop: '24px',
})`
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: flex !important;
  }
`;

export const FiltersContainer = styled(Box).attrs({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
})`
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.values.md}px) {
    overflow-x: overlay;
    scrollbar-width: none !important;
    flex-wrap: nowrap !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    gap: 8px !important;
  }
`;

type ChipProps = {
  isSelected?: boolean;
};

export const StyledChip = styled(Chip).attrs<ChipProps>((props) => ({
  color: 'primary',
  variant: props.isSelected ? 'filled' : 'outlined',
}))<ChipProps>``;

export const FallbackContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '48px 0 16px 0',
})``;
