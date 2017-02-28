import React from 'react';
import { Table, Label, Segment } from 'semantic-ui-react';

const { Cell } = Table;

const OtherCalendarDate = (props) => (
  <Cell>
    <Segment basic disabled style={{height:'72px'}}>
      <Label
        basic
        attached='top right'
        size='small'
        style={{border:'none'}}
      >
        {props.calDate.date}
      </Label>
    </Segment>
  </Cell>
);

export default OtherCalendarDate;