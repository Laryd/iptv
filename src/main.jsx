import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/footer/Footer.jsx';
import { NavbarDefault } from './components/navbar/NavBar.jsx';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <NavbarDefault />
        <App />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
