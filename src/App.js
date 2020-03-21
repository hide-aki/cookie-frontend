import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import customTheme from './utils/theme';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// MUI stuff
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// app
import ClientApp from './pages/client/App';
import BackendApp from './pages/backend/App';

const theme = createMuiTheme(customTheme);

function App() {
  const [isClient, setIsClient] = useState(true);
  useEffect(() => {
    if (window.location.pathname.startsWith('/admin')) {
      setIsClient(false);
    } else {
      setIsClient(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          {isClient ? <ClientApp /> : <BackendApp />}
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
