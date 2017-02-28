import React from 'react';
import { List } from 'semantic-ui-react';
import EventListItem from './EventListItem';

class EventList extends React.Component {
  render() {
    const { events, onDeleteEvent } = this.props;
    return (
      <List divided relaxed>
        { events.map(e => <EventListItem key={e.id} event={e} onDeleteEvent={onDeleteEvent} />) }
      </List>
    );
  }
}

export default EventList;