import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'antd/dist/reset.css'

const root = document.getElementById("root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router basename={process.env.NODE_ENV === 'production' ? '/naberezhnaya-26/' : '/'}>
    <App />
  </Router>
);
