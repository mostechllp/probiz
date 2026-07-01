const fs = require('fs');
let c = fs.readFileSync('src/pages/Leaders.jsx', 'utf8');

const target = `<section className="leaders-hero">
            <div className="huge-pb">PB</div>
            <div className="container" style={{ position: "relative", zIndex: "1" }}>`;

const replacement = `<section className="leaders-hero" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'auto' }}>
                <DotField
                  dotRadius={1.5}
                  dotSpacing={14}
                  bulgeStrength={67}
                  glowRadius={160}
                  sparkle={true}
                  waveAmplitude={0}
                  gradientFrom="#ffccab"
                  gradientTo="#d35400"
                  glowColor="rgba(211, 84, 0, 0.1)"
                />
            </div>
            <div className="huge-pb" style={{ zIndex: 1, position: 'absolute' }}>PB</div>
            <div className="container" style={{ position: "relative", zIndex: "2", pointerEvents: 'none' }}>`;

c = c.replace(/<section className="leaders-hero">[\s\S]*?<div className="container" style={{ position: "relative", zIndex: "1" }}>/, replacement);

fs.writeFileSync('src/pages/Leaders.jsx', c);
console.log('Fixed Leaders.jsx');
