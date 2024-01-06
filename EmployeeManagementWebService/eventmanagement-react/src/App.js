// src/App.js
import React, { useState, useEffect } from 'react';
import AddEvent from './components/AddEvent';
import EventList from './components/EventList';
import axios from 'axios';

function App() {
  const [events, setEvents] = useState([]);

  const handleAddEvent = async (newEvent) => {
    try {
      const response = await axios.post('http://localhost:5000/new', newEvent);
      setEvents([...events, response.data.event]);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/list');
        setEvents(response.data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mt-4">
      <AddEvent onAddEvent={handleAddEvent} />
      <EventList events={events} />
    </div>
  );
}

export default App;
