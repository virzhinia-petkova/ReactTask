import React from 'react';
import { Layout } from 'antd';

const Footer = () => {
  const currentDate = new Date();
  const dateString = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: '2-digit',
    weekday: 'short'
  }).format(currentDate);

  return <Layout.Footer style={{ textAlign: 'center' }}>{dateString}</Layout.Footer>;
};

export default Footer;
