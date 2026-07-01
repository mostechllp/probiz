import React from 'react';

const Impact = () => {
    return (
        <>
            
    

    <header className="impact-page-header" style={{ position: "relative", backgroundImage: "url('assets/images/impact.png')", backgroundSize: "cover", backgroundPosition: "center", padding: "6rem 0 3rem", color: "white" }}>
        <div className="overlay" style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", background: "linear-gradient(to right, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.6) 50%, rgba(17,17,17,0) 100%)", zIndex: "1" }}></div>
        <div className="container" style={{ position: "relative", zIndex: "2", textAlign: "left" }}>
            <h4 className="section-eyebrow" style={{ color: "var(--color-orange)", letterSpacing: "2px", fontSize: "0.8rem", marginBottom: "1.5rem", textTransform: "uppercase", fontWeight: "800" }}>THE PROBIZ APPROACH</h4>
            <h1 className="section-heading impact-hero-heading" style={{ fontSize: "4.5rem", lineHeight: "1.1", color: "white", marginBottom: "1.5rem", fontFamily: "var(--font-heading)", fontWeight: "800" }}><span className="nowrap-mobile">We Partner.</span><br /><span className="nowrap-mobile" style={{ color: "var(--color-orange)" }}>We Execute.</span><br /><span className="nowrap-mobile">We Deliver.</span></h1>
            <p style={{ fontSize: "1.05rem", maxWidth: "500px", color: "rgba(255,255,255,0.9)", lineHeight: "1.6" }}>Driving value through deep active listening and radical collaboration. We co-design bespoke solutions to ensure your organization is execution-ready.</p>
        </div>
    </header>

    <section className="philosophy-section" style={{ backgroundColor: "#fcfcfc", padding: "6rem 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: "4rem", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--color-black)", marginBottom: "1.5rem", fontWeight: "800" }}>Our Philosophy</h2>
                <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "#555", marginBottom: "1rem" }}>At ProBiz, our philosophy is anchored in deep active listening and radical collaboration. We don't just provide recommendations; we co-design bespoke solutions alongside your leadership teams. By blending our multi-decade expertise with your unique organizational context, we ensure that every strategy is not only ambitious but execution-ready, driving tangible value from day one.</p>
            </div>
            <div style={{ flex: "1", minWidth: "300px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: "500px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "2px solid #fdf5f1", display: "flex", flexDirection: "column", backgroundColor: "white" }}>
                    <img src="assets/images/empty_boardroom_city.png" alt="Strategy and Innovation" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }} />
                    <div style={{ padding: "1.5rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", color: "#222", marginBottom: "0.2rem", fontWeight: "700" }}>STRATEGY <span style={{ color: "var(--color-orange)" }}>&</span> INNOVATION PARTNERS</h4>
                        <p style={{ fontSize: "0.75rem", color: "#999", textTransform: "uppercase", letterSpacing: "1px", margin: "0", fontWeight: "600" }}>CONSULTING FIRM</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="impact-stats-section" style={{ backgroundColor: "#f5f5f5", padding: "6rem 0 3rem" }}>
        <div style={{ width: "95%", maxWidth: "1600px", margin: "0 auto" }}>
            <div className="stats-grid-container">
                <div style={{ background: "white", padding: "3rem 2rem", borderRadius: "8px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", textAlign: "left" }}>
                    <h3 style={{ fontSize: "3rem", fontFamily: "var(--font-heading)", color: "var(--color-orange)", marginBottom: "1rem", fontWeight: "800" }}>12+</h3>
                    <p style={{ fontSize: "0.75rem", fontWeight: "800", color: "var(--color-black)", textTransform: "uppercase", letterSpacing: "1px", lineHeight: "1.4" }}>INDUSTRIES SERVED<br />ACROSS INDIA AND THE<br />GCC</p>
                </div>
                <div style={{ background: "white", padding: "3rem 2rem", borderRadius: "8px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", textAlign: "left" }}>
                    <h3 style={{ fontSize: "3rem", fontFamily: "var(--font-heading)", color: "var(--color-orange)", marginBottom: "1rem", fontWeight: "800" }}>50+</h3>
                    <p style={{ fontSize: "0.75rem", fontWeight: "800", color: "var(--color-black)", textTransform: "uppercase", letterSpacing: "1px", lineHeight: "1.4" }}>ORGANIZATIONAL<br />TRANSFORMATIONS<br />DELIVERED</p>
                </div>
                <div style={{ background: "white", padding: "3rem 2rem", borderRadius: "8px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", textAlign: "left" }}>
                    <h3 style={{ fontSize: "3rem", fontFamily: "var(--font-heading)", color: "var(--color-orange)", marginBottom: "1rem", fontWeight: "800" }}>25+</h3>
                    <p style={{ fontSize: "0.75rem", fontWeight: "800", color: "var(--color-black)", textTransform: "uppercase", letterSpacing: "1px", lineHeight: "1.4" }}>YEARS OF COMBINED<br />CONSULTING<br />EXPERIENCE</p>
                </div>
                <div style={{ background: "white", padding: "3rem 2rem", borderRadius: "8px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", textAlign: "left" }}>
                    <h3 style={{ fontSize: "3rem", fontFamily: "var(--font-heading)", color: "var(--color-orange)", marginBottom: "1rem", fontWeight: "800" }}>15+</h3>
                    <p style={{ fontSize: "0.75rem", fontWeight: "800", color: "var(--color-black)", textTransform: "uppercase", letterSpacing: "1px", lineHeight: "1.4" }}>COUNTRIES OF CROSS-<br />CULTURAL PROJECT<br />EXPOSURE</p>
                </div>
            </div>
        </div>
    </section>

    <section style={{ backgroundColor: "#f5f5f5", paddingBottom: "3rem" }}>
        <div style={{ width: "95%", maxWidth: "1600px", margin: "0 auto" }}>
            <div style={{ backgroundColor: "#333333", padding: "4rem 5rem", borderRadius: "8px", color: "white" }}>
                <div style={{ color: "var(--color-orange)", fontSize: "4rem", lineHeight: "1", fontFamily: "Georgia, serif", marginBottom: "1rem", fontWeight: "bold" }}>"</div>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", fontStyle: "italic", marginBottom: "2.5rem", fontWeight: "400" }}>"OCS recognizes the continuous evolution of the logistics industry and acknowledged the urgency to plan, develop and deploy the best practices to ensure the highest levels of competitiveness and customer experience standards. We are honored to have partnered with Rajit Karunakaran from ProBiz Knowledge Center to develop and deploy an agile organizational structure to empower the company with the required ecosystem to innovate and excel."</p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <span style={{ width: "30px", height: "2px", backgroundColor: "var(--color-orange)" }}></span>
                    <span style={{ fontSize: "0.8rem", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "white" }}>OCS KUWAIT</span>
                </div>
            </div>
        </div>
    </section>

    <section style={{ backgroundColor: "#ffffff", padding: "4rem 0 6rem" }}>
        <div style={{ width: "95%", maxWidth: "1600px", margin: "0 auto" }}>
            <div style={{ borderRadius: "6px", overflow: "hidden", display: "flex", boxShadow: "0 4px 15px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)", flexWrap: "wrap", alignItems: "stretch" }}>
                <div style={{ padding: "3.5rem 3rem", flex: "1", minWidth: "300px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#efeff1" }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", color: "#202428", marginBottom: "1rem", fontWeight: "600" }}>Strategy that Sticks</h3>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#666d75" }}>Our cross-cultural exposure allows us to bridge the gap between global best practices and local operational realities.</p>
                </div>
                <div style={{ flex: "2", minWidth: "400px", position: "relative", minHeight: "250px" }}>
                    <img src="assets/images/map .png" alt="Global Reach" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", top: "0", left: "0" }} />
                </div>
            </div>
        </div>
    </section>

    

    

<style dangerouslySetInnerHTML={{ __html: `
        .impact-page-bg {
            background-color: var(--color-white);
            color: var(--color-black);
            padding: 6rem 0;
        }
        .impact-page-stats {
            background-color: #111111;
            padding: 4rem 0;
            color: var(--color-white);
        }
        .impact-page-stats .stat-box {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .impact-page-stats .stat-number {
            color: var(--color-orange);
        }
        .stats-grid-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
        }
        @media (max-width: 992px) {
            .stats-grid-container {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 768px) {
            .stats-grid-container {
                grid-template-columns: 1fr;
            }
            .impact-hero-heading {
                font-size: clamp(2rem, 11vw, 3.5rem) !important;
            }
            .nowrap-mobile {
                white-space: nowrap;
            }
        }
    ` }} />
        </>
    );
};

export default Impact;
