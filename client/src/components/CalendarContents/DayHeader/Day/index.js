import React, { PropTypes } from 'react';
import { Table } from 'semantic-ui-react';

const { HeaderCell } = Table;

const Day = (props) => {
  const {
    day
  } = props;
  
  return (
    <HeaderCell textAlign='center' style={{paddingTop:'3px', paddingBottom:'3px'}}>{day}</HeaderCell>
  );
};

Day.propTypes = {
  day: PropTypes.string.isRequired
};

export default Day;