// SMS notifications UI

// File: frontend/src/user/Notifications.js
import React from 'react';

const Notifications = ({ alerts }) => (
  <div className="card mb-4 shadow-sm">
    <div className="card-header bg-info text-white">
      <h4 className="mb-0">🔔 Notifications</h4>
    </div>
    <div className="card-body">
      {alerts.length > 0 ? (
        <ul className="list-group">
          {alerts.map((note, idx) => (
            <li key={idx} className="list-group-item">
              {note.message}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">No new notifications</p>
      )}
    </div>
  </div>
);

export default Notifications;

// This code defines a simple notifications component for a web application using React.
// It displays a list of notifications or a message indicating that there are no new notifications.