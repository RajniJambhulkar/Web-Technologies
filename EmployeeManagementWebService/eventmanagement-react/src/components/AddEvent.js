// src/components/AddEvent.js
import React, { useState } from 'react';

const AddEvent = ({ onAddEvent }) => {
  const [eventTitle, setEventTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddEvent = () => {
    const newEvent = {
      eventTitle,
      description,
      dueDate,
    };
    onAddEvent(newEvent);
    // Reset form fields after adding the event
    setEventTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="eventTitle" className="form-label">Event Title</label>
          <input type="text" className="form-control" id="eventTitle" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">Due Date</label>
          <input type="date" className="form-control" id="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddEvent}>Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
