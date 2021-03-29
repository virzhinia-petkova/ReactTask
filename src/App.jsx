import { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { refreshAccessToken } from './common/auth';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import CurrentWeather from './components/CurrentWeather';

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
          <Route exact path="/home" component={Home} />
          <Route path="/home/:city" component={CurrentWeather} />
          <Route exact path="/about" component={About} />
          <Route exact path="/error" component={Error} />
          <Redirect path="/" exact to="/home" />
          <Redirect to="/error" />
        </Switch>
      ) : (
        <p>Getting things ready for you...</p>
      )}
      <Footer />
    </div>
  );
};

export default App;
