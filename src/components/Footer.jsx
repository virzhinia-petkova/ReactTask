import React from 'react';
import * as Styled from '../styles/GlobalStyles'

const Footer = () => {
  const currentDate = new Date();
  const dateString = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: '2-digit',
    weekday: 'short'
  }).format(currentDate);

  return <Styled.Footer>{dateString}</Styled.Footer>;
};

export default Footer;
