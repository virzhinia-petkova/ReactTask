import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ items }) => {
  return (
    <div className="card-list">
      {items.map(item => (
        <Card key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </Card>
      ))}
    </div>
  );
};

Card.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default CardList;
