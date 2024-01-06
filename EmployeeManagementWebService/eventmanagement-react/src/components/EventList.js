// src/components/EventList.js
import React from 'react';

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Event List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Event Title</th>
            <th scope="col">Description</th>
            <th scope="col">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.eventTitle}</td>
              <td>{event.description}</td>
              <td>{event.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
