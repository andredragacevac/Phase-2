import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>
        <Link className="button" to="/">The Peoples Place</Link>
      </h1>
      <nav>
        <div className="navigation">
          <Link className="button" to="/requests">Requests</Link>
          <Link className="button" to="/requests/new">Request Product</Link>
          <Link className="button" to="/about">About Us</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header