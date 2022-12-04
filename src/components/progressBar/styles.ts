import { BoxProps } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';

type ProgressStepProps = BoxProps & {
  isSelected?: boolean;
};

export const ProgressStep = styled(Box).attrs<ProgressStepProps>((props) => ({
  backgroundColor: props.isSelected
    ? theme.palette.primary.main
    : theme.palette.grey.A100,
  borderRadius: '10px',
}))<ProgressStepProps>`
  width: ${(props) => (props.isSelected ? '32px' : '16px')};
  height: 16px;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: ${(props) => (props.isSelected ? '16px' : '8px')};
    height: 8px;
  }
`;

export const Container = styled(Box).attrs({
  display: 'flex',
  justifyItems: 'center',
  gap: '16px',
})``;
