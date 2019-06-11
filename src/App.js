import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import theme from './styles/theme';
import store from './store';

import WelcomePage from './components/pages/welcome';
import LoginPage from './components/pages/login';
import SignupPage from './components/pages/signup';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
