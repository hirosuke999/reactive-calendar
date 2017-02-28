import React from 'react';
import chunk from 'lodash/chunk';
import { Table } from 'semantic-ui-react';
import DayHeader from './DayHeader';
import CalendarDate from './CalendarDate';
import OtherCalendarDate from './OtherCalendarDate';

const {
  Header,
  Body,
  Row,
} = Table;

const CalendarContents = (props) => {
  const { calDates, events, onEventAdd, onDeleteEvent } = props;
  const calDateComponents = calDates.map((calDate) => {
    if ( calDate.inMonth ) {
      return <CalendarDate key={calDate.id} calDate={calDate} events={events[calDate.id] || []} onEventAdd={onEventAdd} onDeleteEvent={onDeleteEvent}/>;
    }
    else {
      return <OtherCalendarDate key={calDate.id} calDate={calDate} />;
    }
  });
  const calWeeks = chunk(calDateComponents, 7);
  
  return (
    <Table celled columns='seven' size='small' color='teal'>
      <Header>
        <DayHeader />
      </Header>
      <Body>
        { calWeeks.map((calWeek, index) => (<Row key={index}>{calWeek}</Row>)) }
      </Body>
    </Table>
  );
};

export default CalendarContents;