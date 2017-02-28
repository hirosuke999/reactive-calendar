import React from 'react';
import { Table } from 'semantic-ui-react';
import Date from './Date';
import OtherMonthDate from './OtherMonthDate';

const { Row } = Table;

const Week = (props) => {
  const { dates, event } = props;
  return (
    <Row>
      {dates.map((date) => {
        if (date.inMonth) {
          return <Date key={date.id} date={date} />;
        }
        else {
          return <OtherMonthDate key={date.id} date={date} />;
        }
      })}
    </Row>
  );
};

export default Week;