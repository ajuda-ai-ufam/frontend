import { Typography } from '@mui/material';
import {
  PreferenceContainer,
  TextFieldContainer,
  InputLengthContainer,
  StyledTextField,
  TypographyNoSetting,
  PreferentialPlaceContainer,
} from '../../styles';
import { TMonitor } from '../../../../service/requests/useGetMonitorRequest/types';

type Props = {
  hasPreference: boolean;
  preference: string;
  editMode: boolean;
  monitor?: TMonitor;
  handlePreferenceChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

const PreferenceContent = ({
  hasPreference,
  preference,
  editMode,
  monitor,
  handlePreferenceChange,
}: Props) => {
  return (
    <PreferenceContainer>
      <Typography variant="h4">Preferência de atendimento</Typography>
      <Typography variant="body1">
        {editMode
          ? 'Indique o local de sua preferência para o atendimento, seja ele presencial ou em um ambiente online.'
          : 'Aqui está indicado onde você costuma realizar seu atendimento.'}
      </Typography>
      <TextFieldContainer>
        {editMode ? (
          <>
            <StyledTextField
              placeholder="Ex: Sala de Monitoria ou http://meet.google.com/seulink"
              value={preference}
              onChange={handlePreferenceChange}
              inputProps={{ maxLength: 60 }}
            />
            <InputLengthContainer>
              <Typography variant="caption">{`${preference.length}/60`}</Typography>
            </InputLengthContainer>
          </>
        ) : (
          <>
            {hasPreference ? (
              <>
                <PreferentialPlaceContainer>
                  <Typography variant="body1">
                    {monitor?.monitorSettings.preferentialPlace}
                  </Typography>
                </PreferentialPlaceContainer>
              </>
            ) : (
              <TypographyNoSetting>
                Parece que você ainda não informou sua preferência, para alterar
                isso você pode clicar em Editar.
              </TypographyNoSetting>
            )}
          </>
        )}
      </TextFieldContainer>
    </PreferenceContainer>
  );
};

export default PreferenceContent;
