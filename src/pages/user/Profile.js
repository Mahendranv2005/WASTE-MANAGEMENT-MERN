// File: frontend/src/user/PickupHistory.js
import React from 'react';

const PickupHistory = ({ history }) => (
  <div className="card mb-4 shadow-sm">
    <div className="card-header bg-success text-white">
      <h4 className="mb-0">📜 Pickup History</h4>
    </div>
    <div className="card-body">
      {history && history.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.date}</td>
                  <td>
                    <span className={`badge ${item.status === 'Completed' ? 'bg-success' : 'bg-secondary'}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-muted">No pickup history available.</p>
      )}
    </div>
  </div>
);

export default PickupHistory;