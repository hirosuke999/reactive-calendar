import 'whatwg-fetch';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
};

const parseJSON = (response) => {
  return response.json();
};

const fetchEvents = (success) => {
  window.fetch(process.env.API_SERVER + '/api/events', {
    mode: 'cors',
    headers: {
      Accept: 'application/json',
    },
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(success);
};

const addEvent = (event) => {
  window.fetch(process.env.API_SERVER + '/api/events', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: event.title,
      date: event.date.toLocaleDateString(),
      start_time: event.startTime.toLocaleString(),
      finish_time: event.finishTime.toLocaleString()
    })
  })
  .then(checkStatus);
};
  
export default {
  fetchEvents,
  addEvent,
};