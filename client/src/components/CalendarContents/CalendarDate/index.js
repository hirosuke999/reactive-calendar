import React from 'react';
import { Table, Label, Segment } from 'semantic-ui-react';
import styles from './styles.css.js';
import DateLabel from './DateLabel';
import EventDialog from './EventDialog';

const { Cell } = Table;

class CalendarDate extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
    
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleEventAdd = this.handleEventAdd.bind(this);
  }
  handleOpen() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }
  handleEventAdd(event) {
    this.props.onEventAdd(Object.assign(
      {}, event, { date: new Date(this.props.calDate.time) }
    ));
    this.handleClose();
  }
  render() {
    const { calDate, events } = this.props;

    return (
      <Cell onClick={this.handleOpen} >
        <Segment basic style={ styles.innerCellTop } >
          <DateLabel calDate={calDate} />
        </Segment>
        <Segment basic style={ styles.innerCellBottom } >
          {events.map(evt => (
            <Label
              circular 
              color='pink'
              size='mini'
              empty
              key={evt.id}
            />
          ))}
        </Segment>        
        <EventDialog
          open={this.state.open}
          onClose={this.handleClose}
          calDate={calDate}
          events={events}
          onEventAdd={this.handleEventAdd}
          onDeleteEvent={this.props.onDeleteEvent}
        />
      </Cell>
    );
  }
}

export default CalendarDate;