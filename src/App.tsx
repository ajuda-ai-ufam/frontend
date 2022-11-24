import { ThemeProvider } from '@mui/system';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calendar from './screens/calendar';
import CodeVerificationScreen from './screens/codeVerification';
import Login from './screens/login';
import MonitorRequests from './screens/monitorRequests';
import RegisterProfessor from './screens/registerProfessor';
import RegisterStudent from './screens/registerStudent';
import Register from './screens/registerType';
import Subjects from './screens/subjects';
import { SCREENS } from './utils/screens';
import theme from './utils/theme';

const App: React.FC = () => {
  return (
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
          <Route path={SCREENS.CREATE_STUDENT} element={<RegisterStudent />} />
          <Route path={SCREENS.SUBJECTS} element={<Subjects />} />
          <Route path={SCREENS.CALENDAR} element={<Calendar />} />
          <Route
            path={SCREENS.MONITOR_REQUESTS}
            element={<MonitorRequests />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
