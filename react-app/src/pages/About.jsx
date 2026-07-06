import React from 'react';

const About = () => {
    return (
        <>
            
    

    <header className="page-header" style={{ backgroundImage: "url('assets/images/a_professional_high_end_corporate_hero_image_for_a_consulting_firm._modern.png')", backgroundSize: "cover", backgroundPosition: "center", padding: "8rem 0", textAlign: "center", color: "white", position: "relative" }}>
        <div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "rgba(0,0,0,0.6)" }}></div>
        <div className="container" style={{ position: "relative", zIndex: "1" }}>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "4rem", marginBottom: "0", fontWeight: "800", color: "#ffffff" }}>About Us</h1>
        </div>
    </header>

    <section className="about-section" style={{ paddingTop: "5rem" }}>
        <div className="container about-container">
            <div className="about-image-column">
                <div className="image-wrapper">
                    <div className="image-backdrop"></div>
                    <img src="assets/images/r6.PNG" alt="Professional Consulting Partner" className="about-img" />
                </div>
            </div>
            
            <div className="about-content-column">
                <h4 className="section-eyebrow">WHO WE ARE</h4>
                <h2 className="section-heading">A Different Kind of Consulting Partner</h2>
                
                <div className="about-text">
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#222", marginBottom: "2rem" }}>
                        ProBiz Knowledge Center was founded on a simple belief: real change does not happen through slide decks delivered and forgotten. It happens when consultants roll up their sleeves alongside their clients and work through every challenge together.
                    </p>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.8", color: "#555", paddingLeft: "1.5rem", borderLeft: "1px solid var(--color-orange)", marginBottom: "2rem" }}>
                        We are a Trivandrum-based consulting practice with deep roots in organizational development and a growing footprint in business excellence and experiential learning. Drawing on lateral thinking methodologies and cross-cultural expertise across India and the GCC region, we bring a perspective that is both globally informed and locally grounded.
                    </p>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.8", color: "#666", fontStyle: "italic", paddingLeft: "1.5rem", borderLeft: "3px solid #eaeaea" }}>
                        When you engage ProBiz, we do not arrive with a generic playbook. We take time to understand your business, your people and your systems before we co-design solutions with you. Our goal is to leave your organization stronger, more agile and fully equipped to continue growing without us.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <style dangerouslySetInnerHTML={{ __html: `
        .people-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
        }
        @media (max-width: 768px) {
            .people-grid {
                grid-template-columns: 1fr;
            }
        }
    ` }} />
    <section style={{ backgroundColor: "#1a1a1a", color: "white", padding: "6rem 0" }}>
        <div className="container">
            <h4 style={{ color: "var(--color-orange)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "1rem", fontWeight: "700" }}>OUR PEOPLE</h4>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", marginBottom: "4rem", fontWeight: "800", lineHeight: "1.1" }}>Led by Experts, Driven by Results</h2>
            
            <div className="people-grid">
                
                {/*  Leader 1  */}
                <div>
                    <div style={{ position: "relative", marginBottom: "2rem" }}>
                        <img src="assets/images/img11.jpeg" alt="Rajit Karunakaran" style={{ width: "100%", height: "auto", aspectRatio: "4/4.5", objectFit: "cover", filter: "grayscale(100%)", borderBottom: "4px solid var(--color-orange)" }} />
                        <div style={{ position: "absolute", bottom: "20px", left: "20px", backgroundColor: "#000", color: "#fff", padding: "0.5rem 1rem", fontSize: "0.75rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px" }}>FOUNDER & CEO</div>
                    </div>
                    <h3 style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: "800", marginBottom: "1rem" }}>Rajit Karunakaran</h3>
                    <p style={{ color: "#ccc", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                        A visionary leader with extensive experience in organizational development and lateral thinking. Rajit specializes in transforming complex business challenges into streamlined, sustainable growth strategies across the Indian and GCC markets.
                    </p>
                    <a href="/leaders#rajit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", border: "1px solid #444", color: "#fff", textDecoration: "none", transition: "border-color 0.3s" }} onmouseover="this.style.borderColor='var(--color-orange)'" onmouseout="this.style.borderColor='#444'">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                    </a>
                </div>

                {/*  Leader 2  */}
                <div>
                    <div style={{ position: "relative", marginBottom: "2rem" }}>
                        <img src="assets/images/img12.PNG" alt="Abhav R Nair" style={{ width: "100%", height: "auto", aspectRatio: "4/4.5", objectFit: "cover", filter: "grayscale(100%)", borderBottom: "4px solid var(--color-orange)" }} />
                        <div style={{ position: "absolute", bottom: "20px", left: "20px", backgroundColor: "#000", color: "#fff", padding: "0.5rem 1rem", fontSize: "0.75rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px" }}>COO</div>
                    </div>
                    <h3 style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: "800", marginBottom: "1rem" }}>Abhav R Nair</h3>
                    <p style={{ color: "#ccc", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                        An operations strategist focused on business excellence and experiential learning. Abhav ensures that ProBiz's co-designed solutions are executed with precision, helping clients build agile systems that scale effectively.
                    </p>
                    <a href="/leaders#abhav" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", border: "1px solid #444", color: "#fff", textDecoration: "none", transition: "border-color 0.3s" }} onmouseover="this.style.borderColor='var(--color-orange)'" onmouseout="this.style.borderColor='#444'">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                    </a>
                </div>

            </div>
        </div>
    </section>

    <section style={{ backgroundColor: "#fafafa", padding: "7rem 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
            <div style={{ marginBottom: "1.5rem", color: "var(--color-orange)", display: "flex", justifyContent: "center" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/*  Top server box  */}
                    <rect x="4" y="4" width="12" height="6" rx="1"></rect>
                    <line x1="8" y1="7" x2="12" y2="7"></line>
                    {/*  Bottom server box  */}
                    <rect x="4" y="14" width="12" height="6" rx="1"></rect>
                    <line x1="8" y1="17" x2="12" y2="17"></line>
                    {/*  Lightning bolt on the right  */}
                    <path d="M18 9l-3 4h4l-3 5"></path>
                </svg>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "3.2rem", marginBottom: "1.5rem", fontWeight: "800", color: "#111", lineHeight: "1.2" }}>
                Ready to co-design your<br />future?
            </h2>
            <p style={{ color: "#666", fontSize: "1.15rem", lineHeight: "1.6", marginBottom: "3rem" }}>
                We don't just advise; we integrate. Let's work together to make your<br />organization stronger and more agile.
            </p>
            <a href="/contact" style={{ display: "inline-block", backgroundColor: "#1a1a1a", color: "#fff", textDecoration: "none", fontSize: "0.85rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", padding: "1.2rem 2.5rem", border: "2px solid #1a1a1a", transition: "all 0.3s ease" }} onmouseover="this.style.backgroundColor='transparent'; this.style.color='#1a1a1a';" onmouseout="this.style.backgroundColor='#1a1a1a'; this.style.color='#fff';">
                CONTACT US
            </a>
        </div>
    </section>

    

    

<style dangerouslySetInnerHTML={{ __html: `
        body { padding-top: 0; }
        
        .navbar { background-color: transparent !important; box-shadow: none !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; padding: 1.5rem 0 !important; transition: all 0.3s ease; }
        .navbar .nav-links a { color: #fff !important; }
        .navbar .nav-links a:hover, .navbar .nav-links a.active { color: var(--color-orange) !important; }
        .navbar:not(.scrolled) .nav-logo-img { filter: brightness(0) invert(1); }
        .navbar:not(.scrolled) .mobile-toggle svg { stroke: #fff; }

        .navbar.scrolled { background-color: rgba(255, 255, 255, 0.98) !important; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important; padding: 0.8rem 0 !important; border-bottom: none !important; }
        .navbar.scrolled .nav-links a { color: var(--color-black) !important; }
        .navbar.scrolled .nav-links a.active { color: var(--color-orange) !important; }
    ` }} />
        </>
    );
};

export default About;
