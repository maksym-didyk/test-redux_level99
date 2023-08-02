import React from 'react';
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { HomePage } from './pages/HomePage';
import { SingUpPage } from './pages/SingUpPage';
import { App } from './App';
import { store } from './app/store';

export const Root = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/singup" element={<SingUpPage />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
