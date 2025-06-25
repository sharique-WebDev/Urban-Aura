import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Logo from '../Assets/brand-logo.png'
import { FaSearch, FaShoppingCart, FaBars, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-lg-2 p-1 position-fixed">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="" /></Link>
                    <FaShoppingCart className='d-lg-none d-block fs-4 ms-auto me-3 cart-btn' onClick={() => navigate('/cart')}/>
                    <button className="navbar-toggler px-2 text-white rounded-1 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FaBars className='fs-4 fw-normal' />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-2 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active-nav active' : ''}`}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/mens" className={({ isActive }) => `nav-link ${isActive ? 'active-nav active' : ''}`}>Mens</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/womens" className={({ isActive }) => `nav-link ${isActive ? 'active-nav active' : ''}`}>Womens</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/kids" className={({ isActive }) => `nav-link ${isActive ? 'active-nav active' : ''}`}>Kids</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/casual" className={({ isActive }) => `nav-link ${isActive ? 'active-nav active' : ''}`}>Casuals</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active-nav active' : ''}`}>Contact</NavLink>
                            </li> */}
                        </ul>

                        <form className="d-flex position-relative align-items-center mx-lg-2 my-2">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <FaSearch className="position-absolute" />
                        </form>
                        {/* <FaUser className='text-light d-lg-block d-none fs-5 me-3' /> */}
                        <FaShoppingCart className='d-lg-block d-none fs-5 me-3 cart-btn' onClick={() => navigate('/cart')}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
