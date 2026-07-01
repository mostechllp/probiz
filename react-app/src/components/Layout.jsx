import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
                <div className="container nav-container">
                    <Link to="/" className="logo">
                        <img src="/style.css" style={{display: 'none'}} /> 
                        <img src="/assets/images/logoprobiz.png" alt="ProBiz Logo" className="nav-logo-img" />
                    </Link>
                    <button 
                        className="mobile-toggle" 
                        id="mobileToggle" 
                        aria-label="Toggle Navigation"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                    <ul className={`nav-links ${isMobileOpen ? 'active' : ''}`} id="navLinks">
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link></li>
                        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT US</Link></li>
                        <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>WHAT WE DO</Link></li>
                        <li><Link to="/impact" className={location.pathname === '/impact' ? 'active' : ''}>OUR IMPACT</Link></li>
                        <li><Link to="/learning" className={location.pathname === '/learning' ? 'active' : ''}>EXPERIENTIAL LEARNING</Link></li>
                        <li><Link to="/leaders" className={location.pathname === '/leaders' ? 'active' : ''}>THE LEADERS</Link></li>
                        <li><Link to="/join" className={location.pathname === '/join' ? 'active' : ''}>JOIN US</Link></li>
                        <li className="nav-contact-item mobile-btn"><Link to="/contact" className="btn btn-primary nav-btn">CONTACT US</Link></li>
                    </ul>
                    <Link to="/contact" className="btn btn-primary nav-btn desktop-btn">CONTACT US</Link>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer className="site-footer">
                <div className="container footer-container">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <img src="/assets/images/logoprobiz.png" alt="ProBiz Logo" height="90" className="footer-logo" />
                            <p className="footer-tagline">Co-designing performance excellence for a better tomorrow.</p>
                        </div>
                        
                        <div className="footer-links-group">
                            <h4>QUICK LINKS</h4>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">What We Do</Link></li>
                                <li><Link to="/learning">Experiential Learning</Link></li>
                                <li><Link to="/leaders">The Leaders</Link></li>
                                <li><Link to="/join">Join Us</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/white-paper">White Papers</Link></li>
                                <li><Link to="#">Case Studies</Link></li>
                            </ul>
                        </div>
                        
                        <div className="footer-contact">
                            <h4>CONTACT US</h4>
                            <p>Email: <a href="mailto:info@probizindia.in">info@probizindia.in</a></p>
                            <p>Phone: <a href="tel:+914717961112">+91 4717961112</a></p>
                            <p>Location: Trivandrum, Kerala</p>
                        </div>
                    </div>
                    
                    <div className="footer-bottom">
                        <p>&copy; 2026 ProBiz Knowledge Center. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;
