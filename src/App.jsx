import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRoutes from "./Routes";
import './App.css';

function App() {
     
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;