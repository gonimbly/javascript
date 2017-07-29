'use strict';

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const files = fs
  .readdirSync('packages')
  .map(d => path.resolve('packages', d, 'README.md'));

files.forEach(file => {
  const pkgPath = path.resolve(path.dirname(file), 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  const peers = Object.keys(pkg.peerDependencies)
    .sort()
    .map(name => {
      const semver = pkg.peerDependencies[name];
      if (semver.indexOf('>') > -1) {
        return name;
      }
      return `${name}@${semver}`.replace(' ', '');
    })
    .join(' ');

  const cmd = `yarn add -D ${pkg.name} ${peers}`;
  const content = fs
    .readFileSync(file, 'utf8')
    .replace(
      /\[\]: # \(generate-install-begin\)([\s\S]*?)\[\]: # \(generate-install-end\)/gm,
      `[]: # (generate-install-begin)\n\`\`\`bash\n${cmd}\n\`\`\`\n[]: # (generate-install-end)`
    );
  fs.writeFileSync(file, content);
});

console.log(` ${chalk.green.bold('✔')} Updated README install scripts\n`);
