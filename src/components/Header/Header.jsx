import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu, Switch } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { THEMES } from '../../common/constants';

const Header = ({ onClick, mode }) => {
  return (
    <Layout.Header
      mode="horizontal"
      style={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'white'
      }}
    >
      <p>Weather Forecast</p>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
      <Switch
        checkedChildren={<FontAwesomeIcon icon={faSun} />}
        unCheckedChildren={<FontAwesomeIcon icon={faMoon} />}
        onChange={onClick}
        defaultChecked={mode === THEMES.light ? false : true}
      />
    </Layout.Header>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};

export default Header;
