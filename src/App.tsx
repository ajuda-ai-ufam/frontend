import { ThemeProvider } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import 'moment/locale/pt';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodeVerificationScreen from './screens/codeVerification';
import EditMonitoring from './screens/editMonitoring';
import EditProfile from './screens/editProfile';
import Home from './screens/home';
import LandingPage from './screens/landingPage';
import Login from './screens/login';
import MonitorRequests from './screens/monitorRequests';
import NotFoundError from './screens/notFoundError';
import RegisterProfessor from './screens/registerProfessor';
import RegisterStudent from './screens/registerStudent';
import Register from './screens/registerType';
import ResetPassword from './screens/resetPassword';
import ResetPasswordEmail from './screens/resetPasswordEmail';
import Schedules from './screens/schedules';
import SchedulesHistoric from './screens/schedulesHistoric';
import SubjectDetails from './screens/subjectDetails';
import Subjects from './screens/subjects';
import { SCREENS } from './utils/screens';
import theme from './utils/theme';

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
              <Route
                path={SCREENS.RESET_PASSWORD}
                element={<ResetPassword />}
              />
              <Route path={SCREENS.EDIT_PROFILE} element={<EditProfile />} />
              <Route
                path={SCREENS.EDIT_MONITORING}
                element={<EditMonitoring />}
              />
              <Route path={SCREENS.HOME} element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </SnackbarProvider>
    </LocalizationProvider>
  );
};

export default App;
