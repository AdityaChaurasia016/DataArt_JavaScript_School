import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function EventModal({ event, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="modal-backdrop"
      style={{
        display: 'block',
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        zIndex: 1050,
        overflowY: 'auto'
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="bg-white text-dark p-4 shadow rounded"
        style={{ maxWidth: 400, margin: '100px auto', position: 'relative' }}
      >
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
          style={{ position: 'absolute', top: 10, right: 10 }}
        />
        <h2>{event.title}</h2>
        <img src={event.imageURL} alt={event.title} className="img-fluid my-3 rounded" />
        <p>{event.description}</p>
        <p><strong>Category:</strong> {event.category}</p>
      </div>
    </div>,
    document.body
  );
}
