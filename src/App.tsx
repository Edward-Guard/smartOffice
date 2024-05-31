import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AplicationProvider from './Context/AplicationProvider';
import NavBar from './MainScreen/NavBar';
import LoginPage from './MainScreen/Pages/Login';
import StockPage from './MainScreen/Pages/StockPage';
import ServicesPage from './MainScreen/Pages/ServicesPage';
import EmployeesPage from './MainScreen/Pages/EmployeesPage';
import { useEffect, useState } from 'react';

function App() {
const [path, setPath] = useState('/');

  useEffect(() => {
    const newPath = window.location.pathname;
    setPath(newPath);
  }, []);

  return (
    <AplicationProvider>
      <BrowserRouter>
        <div className="principalScreen">
          <div className="MainScreen">
          {(path !== '/') && <NavBar />}
          <Routes>
            <Route path="/" element={ <LoginPage /> } />
            <Route path="/stock" element={ <StockPage /> } />
            <Route path="/services" element={ <ServicesPage /> } />
            <Route path="/employees" element={ <EmployeesPage /> } />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AplicationProvider>
  );
}

export default App;
