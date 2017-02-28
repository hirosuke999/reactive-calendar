import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import 'whatwg-fetch';
import CalendarHeader from './components/CalendarHeader';
import CalendarContents from './components/CalendarContents';
import AppHelper from './AppHelper';
import styles from './App.css';
import conn from './connection.js';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      date: null,
      calDates: [],
      events: {},
    };
    
    this.handleUpdateCalendar = this.handleUpdateCalendar.bind(this);
    this.handleEventAdd = this.handleEventAdd.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }
  componentWillMount() {
    const today = new Date();
    this.setState({ cursorDate: today });
  }
  componentDidMount() {
    this.fetchEvents();
    // setInterval(this.fetchEvents, 5000);
  }
  handleUpdateCalendar(date) {
    this.setState({ cursorDate: date });
  }
  handleEventAdd(event) {
    this.addEvent(event);
  }
  handleDeleteEvent(eventId) {
    this.deleteEvent(eventId);
  }
  fetchEvents() {
    conn.fetchEvents((events) => {
      this.setState({ events: events });
    });
  }
  addEvent(event) {
    conn.addEvent(event);
    const modifyEvents = () => {
      const timeStamp = event.date.getTime();
      if ( this.state.events[timeStamp] ) {
        return this.state.events[timeStamp].concat(event);
      }
      else {
        return { [timeStamp]: [event] };
      }
    };
    this.setState({
      events: Object.assign({}, this.state.events, modifyEvents())
    });
  }
  deleteEvent(eventId) {
    this.setState({
      events: Object.keys(this.state.events)
                .map(key => this.state.events[key]
                .filter(event => event.id !== eventId))
    });
  }
  getCalendarDates(date) {
    return AppHelper.getCalendarDatesFor(date.getFullYear(), date.getMonth());
  }
  render() {
    return (
      <Container style={ styles.container }>
        <Segment raised>
          <CalendarHeader date={this.state.cursorDate} onUpdateCalendar={this.handleUpdateCalendar} />
          <CalendarContents
            calDates={this.getCalendarDates(this.state.cursorDate)}
            events={this.state.events}
            onEventAdd={this.handleEventAdd}
            onDeleteEvent={this.handleDeleteEvent}
          />
        </Segment>
      </Container>
    );
  }
}

export default App;
