const { readdirSync, writeFileSync } = require('fs');

// some helpful functions
const isSVG = file => /.svg$/.test(file);
const removeExtension = file => file.split('.')[0];
const toPascalCase = string =>
  string
    .match(/[a-z]+/gi)
    .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join('');

// getting all the icons
const icons = readdirSync('_icons')
  .filter(isSVG)
  .map(removeExtension);

const indexContent = [
  icons
    .map(
      icon =>
        `import { ReactComponent as ${toPascalCase(icon)} } from './${icon}';`,
    )
    .join('\n'),
    '',
    '',
    'export default {',
    icons.map(
      icon => 
        `'${icon}': ${toPascalCase(icon)},`
    )
    .join('\n'),
    '}'
].join('\n');

writeFileSync(`test3.js`, indexContent);
console.log('Icon component file created! ✅');