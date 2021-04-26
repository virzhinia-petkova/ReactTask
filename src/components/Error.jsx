import { useHistory } from 'react-router-dom';
import { Button, Image, Typography } from 'antd';
import errorPhoto from '../../public/404.jpg';

const Error = () => {
  const history = useHistory();
  return (
    <>
      <Typography.Title level={2}>Oh, did you get lost?</Typography.Title>
      <Image src={errorPhoto} alt="error photo" />
      <Typography.Title level={3}>Don't worry.</Typography.Title>
      <Button type="primary" onClick={() => history.push('/home')}>
        Here's you way back!
      </Button>
    </>
  );
};

export default Error;
