import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Footer from '../Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Error from '../Error';
import SearchList from '../SearchList/SearchListContainer';

const App = ({ onClick, mode }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header onClick={onClick} mode={mode} />
      <Layout.Content
        style={{
          padding: '3em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
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
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

App.propTypes = {
  onClick: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default App;
