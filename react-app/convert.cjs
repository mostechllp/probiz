const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..');
const destDir = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

function kebabToCamel(str) {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

function styleStringToObjectString(styleStr) {
    const rules = styleStr.split(';').map(s => s.trim()).filter(Boolean);
    const objProps = rules.map(rule => {
        const parts = rule.split(':');
        if (parts.length < 2) return null;
        let key = parts.shift().trim();
        const value = parts.join(':').trim();
        
        // Handle CSS variables (leave them as strings or keep hyphenated)
        if (key.startsWith('--')) {
            return `"${key}": "${value.replace(/"/g, "'")}"`;
        } else {
            key = kebabToCamel(key);
            // check for special vendor prefixes if needed
            return `${key}: "${value.replace(/"/g, "'")}"`;
        }
    }).filter(Boolean);
    return `{{ ${objProps.join(', ')} }}`;
}

const htmlFiles = [
    'index.html',
    'about.html',
    'contact.html',
    'impact.html',
    'join.html',
    'leaders.html',
    'learning.html',
    'services.html',
    'white-paper.html'
];

htmlFiles.forEach(file => {
    const fullPath = path.join(srcDir, file);
    if (!fs.existsSync(fullPath)) return;
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract body content
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) return;
    let bodyContent = bodyMatch[1];
    
    // Extract head style
    const headMatch = content.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    if (headMatch) {
        const headContent = headMatch[1];
        const styleMatch = headContent.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
        if (styleMatch) {
            bodyContent += '\n' + styleMatch.join('\n');
        }
    }
    
    // Remove nav
    bodyContent = bodyContent.replace(/<nav[^>]*>([\s\S]*?)<\/nav>/i, '');
    // Remove footer
    bodyContent = bodyContent.replace(/<footer[^>]*>([\s\S]*?)<\/footer>/i, '');
    // Remove script tags at the bottom
    bodyContent = bodyContent.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '');
    
    let jsx = bodyContent;
    // Convert HTML comments <!-- --> to JSX comments {/* */}
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    
    // Fix inline <style> tags
    jsx = jsx.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, css) => {
        return `<style dangerouslySetInnerHTML={{ __html: \`${css.replace(/`/g, '\\`')}\` }} />`;
    });
    
    // class -> className
    jsx = jsx.replace(/\sclass="/g, ' className="');
    // for -> htmlFor
    jsx = jsx.replace(/\sfor="/g, ' htmlFor="');
    
    // style="blabla" -> style={{blabla}}
    jsx = jsx.replace(/\sstyle="([^"]*)"/g, (match, styleStr) => {
        return ` style=${styleStringToObjectString(styleStr)}`;
    });
    
    // close self-closing tags
    const voidElements = ['img', 'input', 'br', 'hr', 'meta', 'link'];
    voidElements.forEach(tag => {
        const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>`, 'gi');
        jsx = jsx.replace(regex, `<${tag}$1 />`);
    });
    
    // Fix SVG attributes
    const svgAttrs = ['stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule', 'stroke-miterlimit', 'fill-opacity'];
    svgAttrs.forEach(attr => {
        const camel = kebabToCamel(attr);
        const regex = new RegExp(`\\s${attr}="`, 'gi');
        jsx = jsx.replace(regex, ` ${camel}="`);
    });
    
    jsx = jsx.replace(/\sviewbox="/gi, ' viewBox="');
    
    // Component name
    const componentName = file.replace('.html', '').split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
    
    const componentCode = `import React from 'react';

const ${componentName} = () => {
    return (
        <>
            ${jsx}
        </>
    );
};

export default ${componentName};
`;

    fs.writeFileSync(path.join(destDir, `${componentName}.jsx`), componentCode);
    console.log(`Converted ${file} to ${componentName}.jsx`);
});
