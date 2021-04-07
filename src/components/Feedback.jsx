import React from 'react';

const Feedback = () => {
  const currentDate = new Date();
  const dateString = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: '2-digit',
    weekday: 'short'
  }).format(currentDate);

  return <footer className="feedback">{dateString}</footer>;
};

export default Feedback;
