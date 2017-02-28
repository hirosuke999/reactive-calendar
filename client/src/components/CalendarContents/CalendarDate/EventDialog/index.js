import React from 'react';
import { Modal, Button, Form, Divider } from 'semantic-ui-react';
import EventList from './EventList';
import { getTimeOptions } from './helper.js';

class EventDialog extends React.Component {
  constructor() {
    super();
    
    this.state = {
      title: null,
      startTime: null,
      finishTime: null
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
    this.handleChangeFinishTime = this.handleChangeFinishTime.bind(this);
    this.handleEventAdd = this.handleEventAdd.bind(this);
  }
  handleChangeTitle(data) {
    this.setState({
      title: data.value
    });
  }
  handleChangeStartTime(data) {
    this.setState({
      startTime: new Date(data.value)
    });
  }
  handleChangeFinishTime(data) {
    this.setState({
      finishTime: new Date(data.value)
    });
  }
  handleEventAdd() {
    this.props.onEventAdd(this.state);
  }
  render() {
    const { open, onClose, calDate, events } = this.props;
    const options = getTimeOptions(new Date(calDate.time));
    
    return (
      <Modal
        open={ open }
        onClose={ onClose }
        dimmer={ false }
        size='small'
      >
        <Modal.Content style={{
          overflowY: 'scroll',
          maxHeight: '162px',
          closeOnRootNodeClick: true
        }}>
          <EventList events={events} onDeleteEvent={this.props.onDeleteEvent}/>
        </Modal.Content>
        <Divider />
        <Modal.Content>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input placeholder='Add a event' onChange={ (e, data) => this.handleChangeTitle(data) } />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Select compact options={options} placeholder='Start at' onChange={ (e, data) => this.handleChangeStartTime(data) } />
              <Form.Select compact options={options} placeholder='Finish at' onChange={ (e, data) => this.handleChangeFinishTime(data) } />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative size='mini' onClick={ onClose }>
            Close
          </Button>
          <Button positive size='mini' onClick={ this.handleEventAdd }>
            Add
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default EventDialog;