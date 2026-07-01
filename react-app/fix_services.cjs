const fs = require('fs');
let c = fs.readFileSync('src/pages/Services.jsx', 'utf8');

c = c.replace(/<img src="assets\/images\/org_development_team\.png" alt="Organizational Development"[\s\S]*?className="service-img" \/>/, '<ElectricBorder color="#d35400" style={{ borderRadius: 8 }}><img src="assets/images/org_development_team.png" alt="Organizational Development" className="service-img" style={{ display: "block" }} /></ElectricBorder>');

c = c.replace(/<img src="assets\/images\/business_excellence\.png" alt="Business Excellence" className="service-img" \/>/, '<ElectricBorder color="#d35400" style={{ borderRadius: 8 }}><img src="assets/images/business_excellence.png" alt="Business Excellence" className="service-img" style={{ display: "block" }} /></ElectricBorder>');

c = c.replace(/<img src="assets\/images\/experiential_learning\.png" alt="Experiential Learning" className="service-img" \/>/, '<ElectricBorder color="#d35400" style={{ borderRadius: 8, height: "100%" }}><img src="assets/images/experiential_learning.png" alt="Experiential Learning" className="service-img" style={{ display: "block", height: "100%" }} /></ElectricBorder>');

if (!c.includes('import ElectricBorder')) {
  c = c.replace("import React from 'react';", "import React from 'react';\nimport ElectricBorder from '../components/ElectricBorder';");
}

fs.writeFileSync('src/pages/Services.jsx', c);
console.log('Fixed Services.jsx');
