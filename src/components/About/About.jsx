import PropTypes from 'prop-types';
import CardList from '../CardList';
import aboutImage from '../../../public/about.jpg';
import { Row, Col, Image, Typography } from 'antd';

const services = [
  {
    name: 'Search By Location',
    description: "Whereever in the world you'd like to check the weather, we can help",
    id: 1
  },
  {
    name: 'Current Weather',
    description: 'See what the weather is anywhere, in real time.',
    id: 2
  },
  {
    name: 'Daily Forecast',
    description: 'Be prepared for whatever nature surprises you with',
    id: 3
  }
];

const About = () => {
  return (
    <Row align="middle" justify="space-around">
      <Col>
        <Typography.Title level={2}>About us</Typography.Title>
        <Typography.Text>The weather app you've always dreamed of...</Typography.Text>
        <CardList items={services} />
      </Col>
      <Col>
        <Image src={aboutImage} width={'35vw'} alt="about-image" />
      </Col>
    </Row>
  );
};

About.propTypes = {
  className: PropTypes.string
};

export default About;
