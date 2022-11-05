import { ThemeProvider } from '@mui/system';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/login';
import Register from './screens/register';
import theme from './utils/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
