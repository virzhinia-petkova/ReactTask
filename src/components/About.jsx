import aboutImage from '../../public/about.jpg';
import CardList from './CardList';
import { services } from '../common/dummyData';

const About = () => {
  return (
    <div className="app__main about">
      <div className="about__info">
        <h1 className="about__info__title">About us</h1>
        <p className="about__info__subtext">The weather app you've always dreamed of...</p>
        <CardList items={services} />
      </div>
      <img className="about__img" src={aboutImage} alt="about-image" />
    </div>
  );
};

export default About;
