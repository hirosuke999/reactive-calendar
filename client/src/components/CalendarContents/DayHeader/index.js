import React from 'react';
import { Table } from 'semantic-ui-react';
import Day from './Day';

const { Row } = Table;

const DayHeader = (props) => {
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  
  return (
    <Row>
      {days.map((day) =>
        <Day key={day} day={day} />
      )}
    </Row>
  );
};

export default DayHeader;