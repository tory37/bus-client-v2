import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import theme from './styles/theme';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import WelcomePage from './components/pages/welcome';
import LoginPage from './components/pages/login';
import SignupPage from './components/pages/signup';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

// Check for token to keep user loggied in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwtDecode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = './login';
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ToastContainer />
        <Router>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
