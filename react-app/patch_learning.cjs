const fs = require('fs');
let c = fs.readFileSync('src/pages/Learning.jsx', 'utf8');

if (!c.includes('import DecayCard')) {
  c = c.replace("import React from 'react';", "import React from 'react';\nimport DecayCard from '../components/DecayCard';");
}

const replacement = `<div className="gap-grid" style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                <DecayCard width={450} height={350} image="assets/images/r1.jpeg">
                    <h3 style={{ color: "var(--color-orange)", fontSize: "3rem", marginBottom: "0.5rem", fontWeight: "800" }}>75% <span style={{ fontSize: "1.2rem", color: "#ddd" }}>Retention</span></h3>
                    <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "700" }}>Active Debating & Roleplay</h4>
                    <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>When students participate in simulations, they internalize concepts by applying them. This active involvement maximizes engagement and embeds knowledge in long-term memory.</p>
                </DecayCard>
                <DecayCard width={450} height={350} image="assets/images/r2.jpeg">
                    <h3 style={{ color: "#bbb", fontSize: "3rem", marginBottom: "0.5rem", fontWeight: "800" }}>10% <span style={{ fontSize: "1.2rem", color: "#ddd" }}>Retention</span></h3>
                    <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "700" }}>Traditional Lecture Learning</h4>
                    <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>Passive listening results in rapid cognitive decay. Without immediate application, most theoretical knowledge is lost within days of the lecture.</p>
                </DecayCard>
            </div>`;

c = c.replace(/<div className="gap-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, replacement + '\n        </div>\n    </section>');

fs.writeFileSync('src/pages/Learning.jsx', c);
console.log('Fixed Learning.jsx');
