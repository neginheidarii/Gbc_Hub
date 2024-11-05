import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  ProjectIdeas,
  PacMeetings,
  Speaker,
  Contact,
  JoinNow,
} from "./Screens";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-ideas" element={<ProjectIdeas />} />
        <Route path="/pac-meetings" element={<PacMeetings />} />
        <Route path="/guest-speaker" element={<Speaker />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/join-now" element={<JoinNow />} />
      </Routes>
    </Router>
  );
};

export default App;
