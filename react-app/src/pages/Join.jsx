import React from 'react';

const Join = () => {
    return (
        <>
            
    

    <section className="join-hero-banner">
        <div className="container">
            <div className="join-banner-content">
                <h1 style={{ color: "var(--color-orange)" }}>Work With Us</h1>
                <p>Join a collective of ambitious consultants and educators shaping the future of organizational excellence.</p>
            </div>
        </div>
    </section>

    <section style={{ padding: "6rem 0 3rem" }}>
        <div className="container">
            <style dangerouslySetInnerHTML={{ __html: `
                .careers-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }
                @media (max-width: 992px) {
                    .careers-grid {
                        grid-template-columns: 1fr;
                    }
                }
            ` }} />
            <div className="careers-grid">
                <div>
                    <h4 style={{ color: "var(--color-orange)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "700", marginBottom: "1.5rem" }}>CAREERS & CULTURE</h4>
                    
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#555", marginBottom: "1.5rem" }}>
                        ProBiz Knowledge Center is always looking for sharp minds who believe that consulting should create real, lasting change. If you are a practitioner in organizational development, business excellence, education or related fields and want to be part of a team that operates with integrity and ambition, we would love to hear from you.
                    </p>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#555", marginBottom: "2.5rem" }}>
                        We welcome applications from consultants, facilitators, educators, MUN experts and debate coaches who share our commitment to excellence.
                    </p>


                </div>

                <div style={{ position: "relative" }}>
                    <div style={{ position: "absolute", bottom: "-20px", left: "-20px", width: "120px", height: "120px", backgroundColor: "rgba(255, 107, 0, 0.1)", zIndex: "-1" }}></div>
                    <img src="assets/images/team_collaboration.png" alt="ProBiz Team Collaboration" style={{ width: "100%", height: "auto", aspectRatio: "16/10", objectFit: "cover", borderRadius: "6px", boxShadow: "0 15px 40px rgba(0,0,0,0.1)" }} />
                </div>
            </div>
        </div>
    </section>

    <div className="container" style={{ padding: "0 1rem", marginBottom: "6rem", marginTop: "2rem" }}>
        <div className="orange-banner-section">
            <div className="orange-banner-text" style={{ position: "relative", zIndex: "1" }}>
                <h2>Ready to elevate your career?</h2>
                <p style={{ fontSize: "0.95rem", opacity: "0.9" }}><strong>Send your profile to info@probizindia.in with the subject line 'Joining the ProBiz Team'.</strong></p>
            </div>
            <div style={{ position: "relative", zIndex: "1" }}>
                <a href="mailto:info@probizindia.in?subject=Joining the ProBiz Team" className="orange-banner-btn">
                    Take the Leap 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </div>
        </div>
    </div>

    

    

<style dangerouslySetInnerHTML={{ __html: `
        body { padding-top: 0; background-color: #ffffff; color: #111111; }
        
        .navbar { background-color: transparent !important; box-shadow: none !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; padding: 1.5rem 0 !important; transition: all 0.3s ease; }
        .navbar .nav-links a { color: #fff !important; }
        .navbar .nav-links a:hover, .navbar .nav-links a.active { color: var(--color-orange) !important; }
        .navbar:not(.scrolled) .nav-logo-img { filter: brightness(0) invert(1); }
        .navbar:not(.scrolled) .mobile-toggle svg { stroke: #fff; }

        .navbar.scrolled { background-color: rgba(255, 255, 255, 0.98) !important; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important; padding: 0.8rem 0 !important; border-bottom: none !important; }
        .navbar.scrolled .nav-links a { color: var(--color-black) !important; }
        .navbar.scrolled .nav-links a.active { color: var(--color-orange) !important; }

        .join-hero-banner {
            position: relative;
            background-image: url('assets/images/a_diverse_group_of_professional_consultants_and_educators_collaborating_in_a.png');
            background-size: cover;
            background-position: center;
            padding: 12rem 0 8rem;
            min-height: 450px;
            display: flex;
            align-items: center;
        }

        .join-hero-banner::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%);
        }

        .join-banner-content {
            position: relative;
            z-index: 1;
            border-left: 4px solid var(--color-orange);
            padding-left: 1.5rem;
            max-width: 600px;
        }

        .join-banner-content h4 {
            color: var(--color-orange);
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .join-banner-content h1 {
            font-family: var(--font-heading);
            font-size: 4.5rem;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1rem;
            color: #fff;
        }

        .join-banner-content p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #eee;
            margin: 0;
        }

        .orange-banner-section {
            background-color: var(--color-orange);
            position: relative;
            overflow: hidden;
            padding: 4rem 3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .orange-banner-section::before {
            content: "";
            position: absolute;
            top: 0; right: 20%; bottom: 0; width: 120px;
            background: repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(0,0,0,0.06) 30px, rgba(0,0,0,0.06) 60px);
            pointer-events: none;
        }

        .orange-banner-text h2 {
            color: #fff;
            font-family: var(--font-heading);
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 800;
        }

        .orange-banner-text p {
            color: rgba(255, 255, 255, 0.95);
            font-size: 1.1rem;
            max-width: 600px;
            line-height: 1.5;
            margin: 0;
        }

        .orange-banner-btn {
            background-color: #1a1a1a;
            color: #fff;
            padding: 1rem 2rem;
            text-decoration: none;
            font-weight: 500;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            border-radius: 4px;
            transition: background-color 0.3s;
            white-space: nowrap;
        }

        .orange-banner-btn:hover {
            background-color: #000;
            color: #fff;
        }

        @media (max-width: 768px) {
            .orange-banner-section {
                flex-direction: column;
                text-align: center;
                gap: 2rem;
                padding: 3rem 1.5rem;
            }
            .orange-banner-section::before {
                display: none;
            }
        }
    ` }} />
        </>
    );
};

export default Join;
