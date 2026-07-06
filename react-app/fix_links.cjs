const fs = require('fs');

let c1 = fs.readFileSync('src/pages/About.jsx', 'utf-8');
c1 = c1.replace(/href="leaders\.html#rajit"/g, 'href="/leaders#rajit"');
c1 = c1.replace(/href="leaders\.html#abhav"/g, 'href="/leaders#abhav"');
fs.writeFileSync('src/pages/About.jsx', c1);

let c2 = fs.readFileSync('src/pages/Index.jsx', 'utf-8');
c2 = c2.replace(/url:\s*'services\.html'/g, 'url: \'/services\'');
c2 = c2.replace(/url:\s*'learning\.html'/g, 'url: \'/learning\'');
c2 = c2.replace(/url:\s*'contact\.html'/g, 'url: \'/contact\'');
fs.writeFileSync('src/pages/Index.jsx', c2);

console.log("Done");
