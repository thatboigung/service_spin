import React, { useEffect } from 'react';

function Calendar() {
  useEffect(() => {
    const handleClientLoad = () => {
      window.gapi.load('client:auth2', initClient);
    };

    const initClient = () => {
      window.gapi.client.init({
        apiKey: 'YOUR_API_KEY',
        clientId: 'YOUR_CLIENT_ID',
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: 'https://www.googleapis.com/auth/calendar.events',
      }).then(() => {
        window.gapi.auth2.getAuthInstance().signIn();
      });
    };

    handleClientLoad();
  }, []);

  const scheduleAppointment = () => {
    const event = {
      'summary': 'Service Appointment',
      'start': {
        'dateTime': '2021-05-28T09:00:00-07:00',
        'timeZone': 'America/Los_Angeles'
      },
      'end': {
        'dateTime': '2021-05-28T17:00:00-07:00',
        'timeZone': 'America/Los_Angeles'
      },
    };

    const request = window.gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event,
    });

    request.execute(event => {
      console.log('Event created: ', event.htmlLink);
    });
  };

  return (
    <div>
      <button onClick={scheduleAppointment}>
      Schedule Appointment</button>
</div>
);
}

export default Calendar;