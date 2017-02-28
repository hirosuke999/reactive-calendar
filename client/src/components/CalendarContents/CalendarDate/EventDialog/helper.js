import pad from 'lodash/padStart';

export const toTimeLabel = (date) => {
  const padZero = (n) => pad(n, 2, '0');
  return padZero(date.getHours()) + ':' + padZero(date.getMinutes());
};

export const getTimeOptions = (date) => {
  const size = Array(24 * 2).fill({});
  const options = size.map(() => {
    const option = {
      key: date.getTime(),
      text: toTimeLabel(date),
      value: date.getTime()
    };
    
    date.setMinutes(date.getMinutes() + 30);
    
    return option;
  });
  
  return options;
};