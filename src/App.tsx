import { ThemeProvider } from '@mui/system';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Schedules from './screens/schedules';
import CodeVerificationScreen from './screens/codeVerification';
import Login from './screens/login';
import MonitorRequests from './screens/monitorRequests';
import RegisterProfessor from './screens/registerProfessor';
import RegisterStudent from './screens/registerStudent';
import Register from './screens/registerType';
import SubjectDetails from './screens/subjectDetails';
import Subjects from './screens/subjects';
import { SCREENS } from './utils/screens';
import theme from './utils/theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import 'moment/locale/pt';
import SchedulesHistoric from './screens/schedulesHistoric';
import NotFoundError from './screens/notFoundError';
import LandingPage from './screens/landingPage';
import ResetPasswordEmail from './screens/resetPasswordEmail';

const App: React.FC = () => {
  return (
    <LocalizationProvider adapterLocale={'pt'} dateAdapter={AdapterMoment}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        autoHideDuration={5000}
        maxSnack={3}
      >
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path={SCREENS.LOGIN} element={<Login />} />
              <Route path={SCREENS.REGISTER} element={<Register />} />
              <Route
                path={SCREENS.CODE_VERIFICATION}
                element={<CodeVerificationScreen />}
              />
              <Route
                path={SCREENS.CREATE_PROFESSOR}
                element={<RegisterProfessor />}
              />
              <Route
                path={SCREENS.CREATE_STUDENT}
                element={<RegisterStudent />}
              />
              <Route
                path={SCREENS.SUBJECT_DETAILS}
                element={<SubjectDetails />}
              />
              <Route path={SCREENS.SUBJECTS} element={<Subjects />} />
              <Route path={SCREENS.SCHEDULES} element={<Schedules />} />
              <Route
                path={SCREENS.MONITOR_REQUESTS}
                element={<MonitorRequests />}
              />

              <Route
                path={SCREENS.SCHEDULES_HISTORIC}
                element={<SchedulesHistoric />}
              />
              <Route path={SCREENS.LANDING_PAGE} element={<LandingPage />} />
              <Route path="*" element={<NotFoundError />} />
              <Route
                path={SCREENS.RESET_PASSWORD_EMAIL}
                element={<ResetPasswordEmail />}
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </SnackbarProvider>
    </LocalizationProvider>
  );
};

export default App;
