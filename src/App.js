import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './navigation';
import setupStore from './store';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  const store = setupStore();
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Header />
        <Navigation />
      </Router>
    </Provider>
  );
};
export default App;
