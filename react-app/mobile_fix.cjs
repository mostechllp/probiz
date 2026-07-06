const fs = require('fs');
let content = fs.readFileSync('src/pages/Leaders.jsx', 'utf-8');

// 1. Add desktop-only to leader-img-wrapper
content = content.replace(/className="leader-img-wrapper"/g, 'className="leader-img-wrapper desktop-only"');

// 2. Rajit Mobile Image
const rajitQuote = `<p style={{ fontStyle: "italic", fontSize: "1.1rem", color: "#333", margin: "0", fontWeight: "600" }}>"Aligning people, purpose, and performance."</p>\n                    </div>`;
const rajitImgMobile = `\n                    <div className="mobile-only" style={{ margin: "2rem 0" }}>\n                        <img src="assets/images/img11.jpeg" alt="Rajit Karunakaran" className="leader-card-img" />\n                    </div>`;
content = content.replace(rajitQuote, rajitQuote + rajitImgMobile);

// 3. Rajit Mobile Sections
const rajitSections = `<h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "0 0 0.8rem" }}>Key Industries & Geographies Served</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Worked with organizations across Manufacturing, Education, Healthcare, Retail, Technology, Services, Startups, and Public Sector Institutions.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Extensive consulting and training experience throughout India and the MENA (Middle East & North Africa) region.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Delivered leadership development, business excellence, and organizational transformation initiatives across GCC countries and India.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Supported institutions, corporations, entrepreneurs, and educational organizations in achieving strategic objectives.</li>
                        </ul>

                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Signature Accomplishments & Client Outcomes</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Delivered his acclaimed Steve Jobs Leadership Presentation at more than 600 venues across Kerala and the GCC.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Helped organizations strengthen leadership capability, improve operational performance, and foster innovation-driven cultures.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Recognized as Regional Mentor of Change under NITI Aayog's Atal Innovation Mission.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Featured on the prestigious GEMS Mentors List for multiple consecutive years.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Mentored students, startups, educators, and business leaders to transform ideas into practical, high-impact outcomes.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Author of three published books on consulting, leadership, ethics, and corporate culture.</li>
                        </ul>`;
const rajitLeadershipHeader = `<h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Leadership Philosophy</h4>`;
const rajitMobileSections = `\n                        <div className="mobile-only">\n                            ${rajitSections.replace(/ margin: "0 0 0.8rem"/, ` margin: "1.5rem 0 0.8rem"`)}\n                        </div>\n\n                        `;
content = content.replace(rajitLeadershipHeader, rajitMobileSections + rajitLeadershipHeader);

// 4. Abhav Mobile Image
const abhavQuote = `<p style={{ fontStyle: "italic", fontSize: "1.1rem", margin: "0", fontWeight: "600" }}>"Experiential learning is the pathway to future leadership."</p>\n                    </div>`;
const abhavImgMobile = `\n                    <div className="mobile-only" style={{ margin: "2rem 0" }}>\n                        <img src="assets/images/img12.PNG" alt="Abhav R Nair" className="leader-card-img" />\n                    </div>`;
content = content.replace(abhavQuote, abhavQuote + abhavImgMobile);

// 5. Abhav Mobile Sections
const abhavSections = `<h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "0 0 0.8rem" }}>Signature Accomplishments & Client Outcomes</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Founder and CEO of the International Matrix Foundation</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Executive Board member for 60+ Model United Nations conferences.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Served at premier institutions including IIT Bombay, IIT Kharagpur, IIT Roorkee, IIT Indore, IIIT Guwahati, NIT Rourkela, NIT Agartala, NMIMS, and KIIT</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Secretary-General of Rajadhani MUN 2025, Kerala's first internationally integrated MUN conference</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Ambassador for India at International Diplomats UAE.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Helped institutions establish and strengthen MUN and experiential learning programs</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Enabled thousands of students to develop leadership, diplomacy, negotiation, and public-speaking skills</li>
                        </ul>

                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Leadership Philosophy</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Believes in learning through experience and practical engagement</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Focuses on developing future-ready leaders with global perspectives</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Promotes collaboration, innovation, and strategic thinking</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Encourages youth empowerment through diplomacy and leadership opportunities</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Advocates excellence, accountability, and continuous learning</li>
                        </ul>`;
const abhavEducationHeader = `<h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Educational Credentials & Professional Recognition</h4>`;
const abhavMobileSections = `\n                        <div className="mobile-only">\n                            ${abhavSections.replace(/ margin: "0 0 0.8rem"/, ` margin: "1.5rem 0 0.8rem"`)}\n                        </div>\n\n                        `;
const lastEduIndex = content.lastIndexOf(abhavEducationHeader);
if (lastEduIndex !== -1) {
    content = content.substring(0, lastEduIndex) + abhavMobileSections + content.substring(lastEduIndex);
}

// 6. CSS Updates
const cssUpdate = `        .mobile-only {
            display: none;
        }

        @media (max-width: 992px) {
            .desktop-only {
                display: none !important;
            }
            .mobile-only {
                display: block;
            }`;
content = content.replace(/        @media \(max-width: 992px\) \{/, cssUpdate);

fs.writeFileSync('src/pages/Leaders.jsx', content);
console.log("Done");
