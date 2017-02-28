import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';

const CalendarHeader = props => {
  const { date, onUpdateCalendar } = props;
  
  const handleMoveCalendarBackward = () => {
    onUpdateCalendar(new Date(date.getFullYear(), date.getMonth() - 1));
  };
  
  const handleMoveCalendarForward = () => {
    onUpdateCalendar(new Date(date.getFullYear(), date.getMonth() + 1));
  };
  
  const getMonthString = numberOfMonth => {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][numberOfMonth];
  };
  
  return (
    <Grid divided>
      <Grid.Row>
        <Grid.Column width={3} textAlign='center'>
          <Button basic circular icon='caret left' color='pink' onClick={ handleMoveCalendarBackward } />
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as='h3' textAlign='center'>
            { date.getFullYear() } { getMonthString(date.getMonth()) }
          </Header>
        </Grid.Column>
        <Grid.Column width={3} textAlign='center'>
          <Button basic circular icon='caret right' color='pink' onClick={ handleMoveCalendarForward } />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default CalendarHeader;