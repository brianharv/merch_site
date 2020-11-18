import React from "react";
import Navbar from "react-bootstrap/Navbar";


function NavBar() {
  const styles= {
    fontFamily: 'Seymour One',
    color: '#f5f5f5'
  }
  return (
    <div style={styles}>
      <nav className="navbar navbar-dark bg-dark" >
        <a href='https://www.google.com'>the band website</a>
      </nav>
    </div>
  );
}

export default NavBar;