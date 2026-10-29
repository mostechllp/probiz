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

            {/* Paper 1 */}
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

            {/* Paper 2 */}
            <article className="article-content" style={{ paddingTop: 0 }}>
                <h2 className="article-title" style={{ marginBottom: "0.5rem" }}>
                    MBA in the Age of AI
                </h2>
                <p className="paper-tagline">
                    Are our colleges, teachers and placement teams ready?
                </p>

                <div className="paper-section">
                    <h3 className="paper-section-heading">Summary</h3>
                    <p>
                        Business schools have changed many times. They had to earn respect inside universities. They adopted the case method. They were told to do more research. They were told they had lost their way. Each time, the schools that did well were clear about what they were for. AI brings the same question back. It matters to three groups: the leaders who run colleges, the teachers in the classroom, and the placement officers who help students get jobs.
                    </p>
                </div>

                <div className="paper-main-idea-box">
                    <div className="main-idea-header">THE MAIN IDEA</div>
                    <p className="main-idea-text">
                        The MBA of the AI era is about good judgment, taught with AI and not against it. The best schools do not simply buy more tools. They decide carefully what students must still learn to do on their own.
                    </p>
                </div>

                <div className="paper-section">
                    <h3 className="paper-section-heading">What the research shows</h3>
                    <ol className="research-list">
                        <li>
                            <strong>The MBA still pays, but the first job is harder to get.</strong> A 2026 survey of 621 employers in 39 countries (GMAC) found that they still trust business degrees. About a third expect to hire more MBAs. But about one in three also say they are using AI to replace entry-level roles, and only 13% hired more MBA graduates in 2025 than in 2024 (GMAC, 2026a; Fortune, 2026; Ethier, 2026a).
                        </li>
                        <li>
                            <strong>Employers want people skills now and AI skills next.</strong> Communication, problem-solving and adaptability matter most today. Skill in using AI tools is the fastest-growing need, and employers rank it highest for the next five years (GMAC, 2026b; Walker, 2026).
                        </li>
                        <li>
                            <strong>AI is strong at some tasks and weak at others.</strong> In a study of 758 BCG consultants, AI helped on tasks it handles well. On a task it handles badly, AI users were 19 percentage points less likely to get the right answer (Dell’Acqua et al., 2026).
                        </li>
                        <li>
                            <strong>Young workers feel it first.</strong> Workers aged 22–25 in jobs most open to AI saw employment fall by 16% compared with others. The fall was largest where AI replaces work, not where it helps workers (Brynjolfsson, Chandar & Chen, 2025).
                        </li>
                        <li>
                            <strong>Using AI without rules can hurt learning.</strong> Students with free access to GPT-4 did 17% worse than a control group once the tool was taken away. A tutor that gave hints, not answers, mostly avoided this (Bastani et al., 2025).
                        </li>
                        <li>
                            <strong>Harvard shows one clear path.</strong> It gave every student AI access early, made an AI course compulsory, added AI to case classes, trained its teachers, and kept saying the goal is good judgment (Crimson, 2026a; Poets&Quants, 2026a).
                        </li>
                        <li>
                            <strong>Teacher training is the key.</strong> The business school accreditor AACSB calls it the most important factor (AACSB, 2026a). Yet 61% of teachers worldwide have used AI in teaching, 88% of them only a little, and 80% say their college’s AI rules are not complete (Digital Education Council, 2025).
                        </li>
                        <li>
                            <strong>India shows strong signals but little hard data.</strong> Top schools are starting AI programmes. Smaller schools must win on skills, because they cannot win on brand name (Outlook Business, 2026; Careers360, 2026a).
                        </li>
                    </ol>
                </div>

                <div className="paper-cta-box">
                    <div className="paper-cta-content">
                        <h4 className="paper-cta-title">To know more about this paper, click the download button for the full paper</h4>
                        <p className="paper-cta-desc">
                            Download the complete research document on MBA in the Age of AI directly.
                        </p>
                    </div>
                    <a 
                        href="/MBA_in_the_Age_of_AI_White_Paper.pdf" 
                        download="MBA_in_the_Age_of_AI_White_Paper.pdf"
                        className="btn-download btn-download-inline"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download Full Paper
                    </a>
                </div>
            </article>

            {/* Bottom Contact Section */}
            <div className="download-section-wrapper">
                <div className="download-section">
                    <div className="contact-info-panel">
                        <div className="contact-info-text">
                            <h3>Let's Transform Together</h3>
                            <p className="lead">Have questions about SAFe implementation or need customized solutions? Reach out to our experts.</p>
                        </div>
                        <div className="contact-person">
                            <p>For more information, please contact</p>
                            <p className="contact-name">Rajit Karunakaran</p>
                            <p><a href="mailto:rajit@probizindia.in">rajit@probizindia.in</a></p>
                            <p><a href="tel:+918111897897">+91 8111 897897</a></p>
                            <p><a href="https://www.probizindia.in" target="_blank" rel="noopener noreferrer">www.probizindia.in</a></p>
                        </div>
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

                .paper-tagline {
                    font-size: 1.35rem;
                    font-weight: 600;
                    color: #555;
                    margin-bottom: 2rem;
                    line-height: 1.5;
                }

                .paper-section-heading {
                    font-family: var(--font-heading);
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #111;
                    margin-top: 1.5rem;
                    margin-bottom: 1rem;
                }

                .paper-main-idea-box {
                    background: linear-gradient(135deg, #fff9f3 0%, #ffffff 100%);
                    border-left: 4px solid var(--color-orange);
                    border-radius: 10px;
                    padding: 2rem;
                    margin: 2.5rem 0;
                    box-shadow: 0 4px 20px rgba(255, 122, 0, 0.08);
                    border-top: 1px solid rgba(255, 122, 0, 0.1);
                    border-right: 1px solid rgba(255, 122, 0, 0.1);
                    border-bottom: 1px solid rgba(255, 122, 0, 0.1);
                }

                .main-idea-header {
                    font-family: var(--font-heading);
                    font-size: 0.95rem;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                    color: var(--color-orange);
                    text-transform: uppercase;
                    margin-bottom: 0.75rem;
                }

                .main-idea-text {
                    font-size: 1.2rem !important;
                    font-weight: 600;
                    color: #222 !important;
                    line-height: 1.7 !important;
                    margin-bottom: 0 !important;
                    text-align: left !important;
                }

                .research-list {
                    list-style: none;
                    counter-reset: research-counter;
                    padding: 0;
                    margin: 1.5rem 0 2.5rem 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .research-list li {
                    position: relative;
                    padding-left: 3.5rem;
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: #444;
                    counter-increment: research-counter;
                    text-align: justify;
                }

                .research-list li::before {
                    content: counter(research-counter);
                    position: absolute;
                    left: 0;
                    top: 0.15rem;
                    width: 2.2rem;
                    height: 2.2rem;
                    background: #fff3eb;
                    color: var(--color-orange);
                    font-weight: 800;
                    font-size: 0.95rem;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(255, 122, 0, 0.3);
                }

                .research-list li strong {
                    color: #111;
                }

                .paper-cta-box {
                    background: linear-gradient(135deg, #ffffff 0%, #fffaf5 100%);
                    border: 2px solid rgba(255, 122, 0, 0.25);
                    border-radius: 16px;
                    padding: 2.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 2rem;
                    margin-top: 3.5rem;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
                }

                .paper-cta-badge {
                    display: inline-block;
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--color-orange);
                    background-color: rgba(255, 122, 0, 0.1);
                    padding: 0.25rem 0.75rem;
                    border-radius: 4px;
                    margin-bottom: 0.5rem;
                }

                .paper-cta-title {
                    font-family: var(--font-heading);
                    font-size: 1.35rem;
                    font-weight: 800;
                    color: #111;
                    margin: 0.5rem 0;
                    line-height: 1.4;
                }

                .paper-cta-desc {
                    color: #666;
                    font-size: 0.95rem !important;
                    margin: 0 !important;
                    line-height: 1.5 !important;
                    text-align: left !important;
                }

                .btn-download-inline {
                    flex-shrink: 0;
                    white-space: nowrap;
                }

                /* Modern Contact Section Styling */
                .download-section-wrapper {
                    background-color: #f8f9fa;
                    padding: 5rem 20px;
                }
                .download-section {
                    max-width: 1140px;
                    margin: 0 auto;
                }
                
                .contact-info-panel {
                    background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
                    color: #ffffff;
                    padding: 4rem 3.5rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    gap: 3rem;
                    border-radius: 16px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
                }

                .contact-info-text {
                    max-width: 600px;
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
                    margin-bottom: 0;
                    line-height: 1.6;
                }

                .contact-person {
                    background: rgba(255, 255, 255, 0.05);
                    padding: 2rem 2.5rem;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    min-width: 280px;
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
                
                .btn-download {
                    background-color: var(--color-orange);
                    color: #ffffff !important;
                    border: none;
                    padding: 1.2rem 2rem;
                    font-size: 1rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1.2px;
                    cursor: pointer;
                    border-radius: 8px;
                    font-family: 'Inter', sans-serif;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(255, 122, 0, 0.2);
                    text-align: center;
                }
                
                .btn-download:hover {
                    background-color: #e66a00;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(255, 122, 0, 0.3);
                    color: #ffffff !important;
                }
                
                @media (max-width: 900px) {
                    .contact-info-panel {
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 2.5rem 1.5rem;
                        gap: 2rem;
                    }
                    .contact-person {
                        width: 100%;
                        padding: 1.5rem;
                    }
                    .paper-cta-box {
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 2rem 1.5rem;
                    }
                    .btn-download-inline {
                        width: 100%;
                    }
                }
            ` }} />
        </>
    );
};

export default WhitePaper;
