import React from 'react'
import { Link } from 'react-router-dom'

const NavbarHome = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">IISc</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mode">Mode</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarHome;

// style = {{ height: '50px', position: 'fixed', width: '100%', zIndex: '1' }}