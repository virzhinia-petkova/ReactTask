import { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { refreshAccessToken } from './common/auth';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import SearchList from './components/SearchList';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    refreshAccessToken().then(() => setIsLoading(false));
  }, []);

  return (
    <div className="app">
      <Header />
      {!isLoading ? (
        <Switch>
          <Redirect path="/" exact to="/home" />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/home/:location">
            <SearchList />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      ) : (
        <p>Getting things ready for you...</p>
      )}
      <Footer />
    </div>
  );
};

export default App;
