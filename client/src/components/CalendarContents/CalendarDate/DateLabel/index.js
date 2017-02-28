import React from 'react';
import { Label } from 'semantic-ui-react';

const SUNDAY = 0;
const SATURDAY = 6;

class DateLabel extends React.Component {
  render() {
    const { calDate } = this.props;
    
    let color = 'black';
    let circular = false;
    let borderStyle = { border:'none' };
    
    if (calDate.current) {
      color = 'pink';
      circular = true;
      borderStyle = null;
    }
    if (calDate.day === SATURDAY) {
      color = 'blue';
    }
    if (calDate.day === SUNDAY) {
      color = 'red';
    }
    if (calDate.holiday !== null) {
      color = 'red';
      circular = true;
      borderStyle = null;
    }
    
    return (
      <Label
        basic
        attached='top right'
        size='small'
        color={color}
        style={borderStyle}
        circular={circular}
        title={calDate.holiday}
      >
        {calDate.date}
      </Label>
    );
  }
}

export default DateLabel;