import React from 'react';
import EventMarker from './EventMarker.jsx';

export default function Timeline({ events, onEventClick }) {
  return (
    <section id="timeline" className="d-flex flex-column align-items-center">
      {events.map(ev => (
        <EventMarker key={ev.year} event={ev} onClick={() => onEventClick(ev)} />
      ))}
    </section>
  );
}
