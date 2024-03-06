import { Link } from 'react-router-dom';

function Header() {
  return (
    <div
      className="w-full border top-0 fixed flex items-center justify-around h-14
     bg-white"
    >
      <img src="" alt="logo" />
      <nav className="w-1/2 flex justify-evenly">
        <Link to="/">Home</Link>
        <Link to="/#solution">Nossas Soluções</Link>
        <Link to="/#about">Sobre Nós</Link>
        <Link to="/#contact">Contato</Link>
      </nav>
    </div>
  );
}
export default Header;
