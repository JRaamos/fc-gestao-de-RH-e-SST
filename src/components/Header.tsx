import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="w-[98%] border top-4 fixed flex items-center justify-around">
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
