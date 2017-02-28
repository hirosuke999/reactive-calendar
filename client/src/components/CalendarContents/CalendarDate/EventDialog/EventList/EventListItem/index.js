import React from 'react';
import { List } from 'semantic-ui-react';
import styles from './styles.css.js';
import { toTimeLabel } from '../../helper.js';

class EventListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      showIcon: false
    };
    this.handleShowDeleteIcon = this.handleShowDeleteIcon.bind(this);
  }
  handleShowDeleteIcon() {
    this.setState({
      showIcon: !this.state.showIcon
    });
  }
  render() {
    const { event, onDeleteEvent } = this.props;
    return (
      <List.Item onMouseEnter={this.handleShowDeleteIcon} onMouseLeave={this.handleShowDeleteIcon} >
        <List.Content floated='left' style={ styles.time }>
          { toTimeLabel(new Date(event.start_time)) } - { toTimeLabel(new Date(event.finish_time)) }
        </List.Content>
        <List.Content floated='left'>
          <List.Description title={event.title}>
            {event.title}
          </List.Description>
        </List.Content>
        {
          this.state.showIcon && <List.Icon name='delete' onClick={() => onDeleteEvent(event.id)} />
        }
      </List.Item>
    );
  }
}

export default EventListItem;