// File: frontend/src/user/PickupHistory.js
import React from 'react';

const PickupHistory = ({ history }) => (
  <div className="card mb-4 shadow-sm">
    <div className="card-header bg-success text-white">
      <h4 className="mb-0">📜 Pickup History</h4>
    </div>
    <div className="card-body">
      {history.length > 0 ? (
        <ul className="list-group">
          {history.map((item, idx) => (
            <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
              {item.date}
              <span className={`badge ${item.status === 'Completed' ? 'bg-success' : 'bg-secondary'}`}>{item.status}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">No pickup history available.</p>
      )}
    </div>
  </div>
);

export default PickupHistory;