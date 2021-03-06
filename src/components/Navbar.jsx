import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <nav className="navbar navbar-light bg-light">
            <form className="container-fluid justify-content-start">
                <Link to='/' className="btn btn-primary me-2" type="button">Sessions</Link>
                <Link to='/info' className="btn btn-sm btn-info me-2" type="button">Info</Link>
                <Link to='/docs' className='btn btn-dark btn-sm'>docs</Link>
            </form>
        </nav>
    )
}

export default Navbar