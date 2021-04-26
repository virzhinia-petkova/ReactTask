import PropTypes from 'prop-types';
import { Card, Col, Row } from 'antd';

const CardList = ({ items }) => {
  return (
    <Row gutter={[8, 8]}>
      {items.map(item => (
        <Col key={item.id}>
          <Card title={item.name} bordered={true} style={{ width: 300 }}>
            {item.description}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardList;
