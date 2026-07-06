const fs = require('fs');
const path = require('path');

function replaceLinks(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceLinks(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let c = fs.readFileSync(fullPath, 'utf-8');
            let newC = c.replace(/href=["']([^"']+)\.html["']/g, 'href="/$1"');
            if(c !== newC) {
                fs.writeFileSync(fullPath, newC);
                console.log('Updated ' + fullPath);
            }
        }
    });
}

replaceLinks('src');
