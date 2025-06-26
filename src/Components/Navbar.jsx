import React, { useRef, useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Logo from '../Assets/brand-logo.png';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate();
    const navRef = useRef();
    const togglerRef = useRef();

    // Close navbar on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            const isMenuOpen = togglerRef.current?.getAttribute('aria-expanded') === 'true';
            if (
                isMenuOpen &&
                navRef.current &&
                !navRef.current.contains(event.target)
            ) {
                togglerRef.current.click();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close navbar on link click (for mobile)
    const closeNavbar = () => {
        const isMenuOpen = togglerRef.current?.getAttribute('aria-expanded') === 'true';
        if (isMenuOpen) {
            togglerRef.current.click();
        }
    };

    const [cartCount, setCartCount] = useState(0);

    // Load cart count on mount
    useEffect(() => {
  const updateCartCount = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = savedCart.reduce((sum, item) => sum + item.qty, 0);
    setCartCount(totalItems);
  };

  updateCartCount();

  // Listen to custom and cross-tab updates
  window.addEventListener('storage', updateCartCount);
  window.addEventListener('cart-updated', updateCartCount); // ✅ Add this

  return () => {
    window.removeEventListener('storage', updateCartCount);
    window.removeEventListener('cart-updated', updateCartCount); // ✅ Clean up
  };
}, []);



    return (
        <>
            <nav ref={navRef} className="navbar navbar-expand-lg navbar-dark bg-dark p-lg-2 p-1 position-fixed w-100 z-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" /></Link>

                    <FaShoppingCart className="d-lg-none d-block fs-4 ms-auto me-3 cart-btn" onClick={() => navigate('/cart')} />

                    <button
                        ref={togglerRef}
                        className="navbar-toggler px-2 text-white rounded-1 border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FaBars className="fs-4 fw-normal" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-2 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" onClick={closeNavbar} className={({ isActive }) => `nav-link ${isActive ? 'active-nav active' : ''}`}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/mens" onClick={closeNavbar} className={({ isActive }) => `nav-link ${isActive ? 'active-nav active' : ''}`}>Mens</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/womens" onClick={closeNavbar} className={({ isActive }) => `nav-link ${isActive ? 'active-nav active' : ''}`}>Womens</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/kids" onClick={closeNavbar} className={({ isActive }) => `nav-link ${isActive ? 'active-nav active' : ''}`}>Kids</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/casual" onClick={closeNavbar} className={({ isActive }) => `nav-link ${isActive ? 'active-nav active' : ''}`}>Casuals</NavLink>
                            </li>
                        </ul>

                        <form className="d-flex position-relative align-items-center mx-lg-2 my-2">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <FaSearch className="position-absolute" />
                        </form>
                        <span className="position-relative cart-btn" onClick={() => navigate('/cart')}>
                            <FaShoppingCart className="d-lg-block d-none fs-4 me-3" />
                            {cartCount > 0 && (
                                <span
                                    className="position-absolute rounded-circle text-white bg-danger small"
                                    style={{ top: '-10px', right: '2px', padding: '0px 7px' }}
                                >
                                    {cartCount}
                                </span>
                            )}

                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;