// File: FrontEnd/src/admin/Reports.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reports = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.get('/admin/reports', config);
      setReportData(res.data);
    } catch (err) {
      console.error('Error fetching reports:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📈 Waste Pickup Reports</h2>

      <div className="card shadow-sm">
        <div className="card-header bg-info text-white">
          <h5 className="mb-0">📊 Summary</h5>
        </div>
        <div className="card-body">
          {reportData.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Total Pickups</th>
                    <th>Completed</th>
                    <th>Pending</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.map((report, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{new Date(report.date).toLocaleDateString()}</td>
                      <td>{report.total}</td>
                      <td>
                        <span className="badge bg-success">{report.completed}</span>
                      </td>
                      <td>
                        <span className="badge bg-warning text-dark">{report.pending}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-muted">No report data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;
