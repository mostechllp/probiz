import React from 'react';

const WhitePaper = () => {
    return (
        <>
            
    

    <header className="page-header" style={{ backgroundImage: "url('assets/images/white_paper_banner.png')", backgroundSize: "cover", backgroundPosition: "center", padding: "8rem 0", textAlign: "center", color: "white", position: "relative" }}>
        <div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "rgba(0,0,0,0.7)" }}></div>
        <div className="container" style={{ position: "relative", zIndex: "1" }}>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "3.5rem", marginBottom: "0", fontWeight: "800", color: "#ffffff" }}>White Papers</h1>
        </div>
    </header>

    <article className="article-content">
        <span className="article-subtitle">ProBiz Perspective</span>
        <h2 className="article-title">Scaled Agile Framework (SAFe) Empowers OCS, Kuwait</h2>
        
        <p>The year 2020, marked the downfall of many businesses due to the pandemic. Smart companies utilized the lockdown to review their systems, policies, and procedures. As the business slowed down such companies tried to utilize their idle time sensibly and effectively. They were using the lean patch to prepare a launchpad to moonshot postCOVID.</p>
        
        <p>To remain competitive in the new normal, companies need to transform their operations, business solutions and products, and customer experience. The larger challenge in many enterprises is that their current business models, highly centralized organizational hierarchy, and technology backbone made them grounded and tamper with their takeoff, postCOVID.</p>
        
        <p>Visionary leaders believed that when businesses return to some sense of normalcy after the lockdowns, they will face numerous challenges in their efforts to reach pre-COVID-19 levels. To survive, they need the support of a consulting firm for a quick recovery.</p>
        
        <p>The leadership at OCS Kuwait was proactive and engaged ProBiz Knowledge Centre, India to study, review, suggest, design, and restructure the organization.</p>
        
        <p>ProBiz with its vast experience in restructuring businesses had a closer look at the organization. To start with we thought of the traditional organization structure for OCS.</p>
        
        <p>However, we envisaged OCS to resurrect strongly post-COVID and be the leader. Our prime vision was to make the business agile. ProBiz consultants suggested adopting the Scaled Agile Framework (SAFe) after considering the operations and the market volatility. As companies like Spotify and ING Bank proved that they are the leaders in their respective domains and they achieved success by adopting SAFe. Such case studies encouraged ProBiz to go ahead with SAFe. Literature in the public domain also proved that Agile had provided significant improvements to many organizations. We, at ProBiz, believed that decentralizing and empowering employees to make quick business decisions are the key ingredients for success in a digital economy.</p>
        
        <p>Through the implementation of the SAFe Model, ProBiz aimed to make OCS employees quickly adapt and respond to emerging competitive threats. Supply Chain and Logistics companies in Kuwait are in the red ocean. To survive, OCS should be able to efficiently identify and deliver incremental customer value while maintaining quality service. The expected business outcomes of having a SAFe structure include (but are not limited to) increased productivity, quality service, market outreach, and more importantly employee engagement.</p>
        
        <p>To complement the SAFe structure, ProBiz did provide services that would impact positively the core competencies of the employees, their mindset, and product ownership. Accordingly, ProBiz designed a detailed delegation of Authority Manual and Matrix, developed Key Performance Indicators for all employees, developed a Performance Evaluation system, formulated based on market trends a Job Grading, and Salary Structure, and for effective management of its human capital prepared a comprehensive Human Resource Policies and Procedures Manual. OCS Kuwait is now fully equipped and ready to be a leader in the markets it operates.</p>
    </article>

    <div className="download-section-wrapper">
        <div className="download-section">
            <div className="contact-info-panel">
                <div>
                    <h3>Let's Transform Together</h3>
                    <p className="lead">Have questions about SAFe implementation or need customized solutions? Reach out to our experts.</p>
                </div>
                <div className="contact-person">
                    <p>For more information, please contact</p>
                    <p className="contact-name">Rajit Karunakaran</p>
                    <p><a href="mailto:rajit@probizindia.in">rajit@probizindia.in</a></p>
                    <p><a href="tel:+918111897897">+91 8111 897897</a></p>
                    <p><a href="https://www.probizindia.in" target="_blank">www.probizindia.in</a></p>
                </div>
            </div>
            
            <div className="download-form-panel">
                <h3>Download White Paper</h3>
                <form className="download-form" action="#" method="POST" onsubmit="event.preventDefault(); alert('Download started!');">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter Name" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id="company" name="company" placeholder="Enter Company Name" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile No.</label>
                        <input type="tel" id="mobile" name="mobile" placeholder="Enter Mobile No." required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Enter Email Address" required />
                    </div>
                    
                    <button type="submit" className="btn-download">Get Instant Access</button>
                </form>
            </div>
        </div>
    </div>

    

    

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

        .article-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 5rem 20px;
        }

        .article-content p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #444;
            margin-bottom: 1.5rem;
            text-align: justify;
        }

        .article-title {
            font-family: var(--font-heading);
            font-size: 2.5rem;
            font-weight: 800;
            color: #111;
            margin-bottom: 2rem;
            line-height: 1.2;
        }
        
        .article-subtitle {
            color: var(--color-orange);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 0.9rem;
            margin-bottom: 1rem;
            display: block;
        }

        /* Modern Download Section Styling */
        .download-section-wrapper {
            background-color: #f8f9fa;
            padding: 5rem 20px;
        }
        .download-section {
            max-width: 1140px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.08);
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            overflow: hidden;
        }
        
        .contact-info-panel {
            background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
            color: #ffffff;
            padding: 4rem 3rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        .contact-info-panel h3 {
            font-family: var(--font-heading);
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 1rem;
            color: #ffffff;
            line-height: 1.2;
        }
        
        .contact-info-panel p.lead {
            color: #b0b0b0;
            font-size: 1.05rem;
            margin-bottom: 3rem;
            line-height: 1.6;
        }

        .contact-person p {
            margin-bottom: 0.5rem;
            color: #d0d0d0;
            font-size: 1rem;
            font-family: 'Inter', sans-serif;
        }
        
        .contact-person .contact-name {
            color: var(--color-orange);
            font-size: 1.3rem;
            font-weight: 800;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .contact-person a {
            color: #ffffff;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .contact-person a:hover {
            color: var(--color-orange);
        }
        
        .download-form-panel {
            padding: 4rem 3rem;
            background-color: #ffffff;
        }
        
        .download-form-panel h3 {
            font-family: var(--font-heading);
            font-size: 1.8rem;
            font-weight: 800;
            margin-bottom: 2.5rem;
            color: #111;
        }

        .download-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .form-group {
            display: flex;
            flex-direction: column;
        }
        
        .form-group label {
            color: #444;
            font-size: 0.85rem;
            font-weight: 700;
            margin-bottom: 0.6rem;
            font-family: 'Inter', sans-serif;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .form-group input {
            padding: 1.1rem 1.2rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            background-color: #fcfcfc;
            transition: all 0.3s ease;
        }
        
        .form-group input:focus {
            outline: none;
            border-color: var(--color-orange);
            background-color: #ffffff;
            box-shadow: 0 0 0 4px rgba(255, 122, 0, 0.1);
        }
        
        .btn-download {
            background-color: var(--color-orange);
            color: #ffffff;
            border: none;
            padding: 1.2rem;
            font-size: 1.05rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            cursor: pointer;
            border-radius: 8px;
            font-family: 'Inter', sans-serif;
            margin-top: 1rem;
            transition: all 0.3s ease;
        }
        
        .btn-download:hover {
            background-color: #e66a00; /* Fallback slightly darker */
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 122, 0, 0.3);
        }
        
        @media (max-width: 900px) {
            .download-section {
                grid-template-columns: 1fr;
            }
            .contact-info-panel, .download-form-panel {
                padding: 2.5rem 1.5rem;
            }
        }
    ` }} />
        </>
    );
};

export default WhitePaper;
