const fs = require('fs');
let c = fs.readFileSync('src/pages/Learning.jsx', 'utf8');

if (!c.includes('import BorderGlow')) {
  c = c.replace("import React from 'react';", "import React from 'react';\nimport BorderGlow from '../components/BorderGlow';");
}

// We will find all <div className="benefit-card"> ... </div> and wrap them.
// We can use a regex that matches the div and its content.
const cardRegex = /<div className="benefit-card(.*?)">([\s\S]*?)(<\/p>\s*)<\/div>/g;
c = c.replace(cardRegex, (match, p1, p2, p3) => {
  return `<BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="benefit-card${p1}" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>${p2}${p3}</div></BorderGlow>`;
});

// Also wrap the "What ProBiz Provides" cards
const providesRegex = /<div style={{ backgroundColor: "#fbfbfb", borderRadius: "6px", padding: "2.5rem 2rem", boxShadow: "0 10px 30px rgba\(0,0,0,0\.1\)" }}>([\s\S]*?)(<\/p>\s*)<\/div>/g;
c = c.replace(providesRegex, (match, p1, p2) => {
    return `<BorderGlow borderRadius={6} backgroundColor="#2b2b2b" glowColor="25 100 50"><div style={{ padding: "2.5rem 2rem", height: "100%", color: "#fff" }}>${p1}${p2}</div></BorderGlow>`;
});

// also student-card
const studentCardRegex = /<div className="student-card">([\s\S]*?)(<\/p>\s*)<\/div>/g;
c = c.replace(studentCardRegex, (match, p1, p2) => {
    return `<BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="student-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>${p1}${p2}</div></BorderGlow>`;
});


fs.writeFileSync('src/pages/Learning.jsx', c);
console.log('Fixed Learning.jsx with BorderGlow');
