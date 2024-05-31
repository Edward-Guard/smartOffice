import { Route, Routes } from 'react-router-dom';
import './MainScreen.css';
import { useEffect, useState } from 'react';
import ServicesPage from './Pages/ServicesPage';
import StockPage from './Pages/StockPage';
import EmployeesPage from './Pages/EmployeesPage';
import NavBar from './NavBar';
import LoginPage from './Pages/Login';

function MainScreen() {
  const [path, setPath] = useState('/');

  useEffect(() => {
    const newPath = window.location.pathname;
    setPath(newPath);
  }, []);

  return (
    <div className="MainScreen">
      {(path !== '/') && <NavBar />}
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/stock" element={ <StockPage /> } />
        <Route path="/services" element={ <ServicesPage /> } />
        <Route path="/employees" element={ <EmployeesPage /> } />
      </Routes>
    </div>
  );
}

export default MainScreen;
