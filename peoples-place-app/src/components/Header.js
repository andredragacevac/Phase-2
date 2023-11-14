import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      
      <nav>
        <div className="navigation">
          <Link className="button" to="/requests">Requests</Link>
          <Link className="button" to="/requests/new">Request Products</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header