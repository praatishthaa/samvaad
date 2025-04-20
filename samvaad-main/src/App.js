import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  FaUserMd,
  FaUsers,
  FaCalendarAlt,
  FaBars,
  FaChevronLeft,
} from "react-icons/fa";
import VerifyConsultant from "./VerifyConsultant";
import VerifyVolunteer from "./VerifyVolunteer";
import "./App.css";

const Dashboard = () => (
  <div className="dashboard">
    <h1>Welcome, Admin! 👑</h1>
    <nav>
      <Link to="/volunteers">📋 Volunteers Table</Link>
      <Link to="/consultants">🩺 Consultants Table</Link>
      <Link to="/events">📅 Events Table</Link>
      <Link to="/verify-volunteer">✅ Verify Volunteer</Link>
      <Link to="/verify-consultant">✅ Verify Consultant</Link>
      <Link to="/add-event">➕ Add Event</Link>
      <Link to="/update-event">✏️ Update Event</Link>
    </nav>
  </div>
);

const Volunteers = () => (
  <section className="data-section">
    <h2>📋 Volunteer Details</h2>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Therapy Type</th>
          <th>Sessions Held</th>
          <th>Experience (Years)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Aditi Sharma</td>
          <td>Cognitive Behavioral Therapy</td>
          <td>12</td>
          <td>2</td>
          <td>
            <button
              onClick={() => alert("Viewing details for Aditi Sharma")}
              className="view-btn"
            >
              View Details
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Rohan Gupta</td>
          <td>Mindfulness Therapy</td>
          <td>8</td>
          <td>1</td>
          <td>
            <button
              onClick={() => alert("Viewing details for Rohan Gupta")}
              className="view-btn"
            >
              View Details
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
);

const Consultants = () => (
  <section className="data-section">
    <h2>🩺 Consultant Details</h2>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Therapy Type</th>
          <th>Sessions Held</th>
          <th>Experience (Years)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dr. Meera Kapoor</td>
          <td>Trauma Therapy</td>
          <td>30</td>
          <td>8</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Dr. Anil Verma</td>
          <td>Behavioral Therapy</td>
          <td>25</td>
          <td>6</td>
        </tr>
      </tbody>
    </table>
  </section>
);

const Events = () => (
  <section className="data-section">
    <h2>📅 Event Details</h2>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Event Name</th>
          <th>Date</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mental Health Awareness</td>
          <td>10th April 2025</td>
          <td>Delhi</td>
        </tr>
      </tbody>
    </table>
  </section>
);

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="admin-container">
        <aside className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
          <div
            className="toggle-btn"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaChevronLeft /> : <FaBars />}
          </div>
          <h2 className="title">{isSidebarOpen && "Admin Panel"}</h2>
          <ul>
            <li>
              <Link to="/">
                <span className="icon">🏠</span>
                {isSidebarOpen && <span className="text">Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link to="/volunteers">
                <FaUsers />
                {isSidebarOpen && <span>Volunteers</span>}
              </Link>
            </li>
            <li>
              <Link to="/consultants">
                <FaUserMd />
                {isSidebarOpen && <span>Consultants</span>}
              </Link>
            </li>
            <li>
              <Link to="/events">
                <FaCalendarAlt />
                {isSidebarOpen && <span>Events</span>}
              </Link>
            </li>
          </ul>
        </aside>

        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/events" element={<Events />} />
            <Route path="/verify-consultant" element={<VerifyConsultant />} />
           <Route path="/verify-volunteer" element={<VerifyVolunteer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
