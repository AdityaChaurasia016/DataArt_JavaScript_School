import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Timeline from './Timeline.jsx';
import EventModal from './EventModal.jsx';

export default function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    fetch('/events.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load events');
        return res.json();
      })
      .then(setEvents)
      .catch(console.error);
  }, []);

  const toggleTheme = () => setIsDarkTheme(prev => !prev);

  return (
    <div className={`main-container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={{ maxWidth: 850, margin: 'auto', padding: '1.8rem', borderRadius: 12, boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
      <Header onThemeToggle={toggleTheme} isDarkTheme={isDarkTheme} />
      <Timeline events={events} onEventClick={setSelectedEvent} />
      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  );
}
