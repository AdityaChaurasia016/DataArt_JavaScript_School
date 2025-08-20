import React from 'react';

export default function EventMarker({ event, onClick }) {
  return (
    <article
      className="event bg-dark text-light rounded p-3 mb-3 position-relative"
      data-year={event.year}
      onClick={onClick}
      style={{ cursor: 'pointer', borderLeft: '5px solid #ff7043', maxWidth: '580px', width: '100%' }}
    >
      <figure>
        <img
          src={event.imageURL}
          alt={event.title}
          className="img-fluid rounded mb-2 border border-primary"
          style={{ maxHeight: '280px', objectFit: 'cover' }}
        />
        <figcaption className="text-muted fst-italic">{event.title} ({event.year})</figcaption>
      </figure>
      <h3 className="text-primary">{event.year}: {event.title}</h3>
      <p>{event.description}</p>
      <style>
        {`
          article.event::before {
            content: attr(data-year);
            position: absolute;
            top: -15px;
            left: -18px;
            background: #ff7043;
            color: white;
            font-weight: bold;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            padding: 2px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </article>
  );
}
