const fs = require('fs');
let c = fs.readFileSync('src/pages/Learning.jsx', 'utf8');

// The wrapped version looks like this:
// <BorderGlow borderRadius={6} backgroundColor="#2b2b2b" glowColor="25 100 50"><div style={{ padding: "2.5rem 2rem", height: "100%", color: "#fff" }}>...</div></BorderGlow>

const unwrapRegex = /<BorderGlow borderRadius=\{6\} backgroundColor="#2b2b2b" glowColor="25 100 50"><div style=\{\{ padding: "2\.5rem 2rem", height: "100%", color: "#fff" \}\}>([\s\S]*?)(<\/p>\s*)<\/div><\/BorderGlow>/g;

c = c.replace(unwrapRegex, (match, p1, p2) => {
    return `<div style={{ backgroundColor: "#fbfbfb", borderRadius: "6px", padding: "2.5rem 2rem", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>${p1}${p2}</div>`;
});

fs.writeFileSync('src/pages/Learning.jsx', c);
console.log('Unwrapped "What ProBiz Provides" cards');
