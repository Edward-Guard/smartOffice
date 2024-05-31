import { NavLink } from 'react-router-dom';
import './navBar.css';
import { useHotkeys } from 'react-hotkeys-hook';

function NavBar() {
  const handleLocation = (path: string) => {
    window.location.href = path;
  };

  useHotkeys('alt+1', () => { handleLocation('/services'); });
  useHotkeys('alt+2', () => { handleLocation('/stock'); });
  useHotkeys('alt+3', () => { handleLocation('/employees'); });

  return (
    <nav className="navBar">
      <NavLink to="/services" className="navlink">Serviços</NavLink>
      <NavLink to="/stock" className="navlink">Estoque</NavLink>
      <NavLink to="/employees" className="navlink">Funcionários</NavLink>
      <a href="/" className="navlink">Sair</a>
      {/* <NavLink to="" className="navlink">Clientes</NavLink> */}
    </nav>
  );
}

export default NavBar;
