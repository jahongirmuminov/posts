import { formatDistanceToNow } from 'date-fns';
import { parseISO } from 'date-fns/esm';
import React from 'react';

const TimeAgo = ({ timestamp }) => {
  let time = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    time = `${timePeriod} ago`;
  }
  return <span title={timestamp}>&nbsp; {time}</span>;
};

export default TimeAgo;
