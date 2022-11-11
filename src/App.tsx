import { ThemeProvider } from '@mui/system';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodeVerificationScreen from './screens/codeVerification';
import Login from './screens/login';
import Register from './screens/register';
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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
