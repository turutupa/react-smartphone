const fs = require('fs');

const tsconfigPath = __dirname + '/../tsconfig.json';
const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'));
tsconfig.compilerOptions.noEmit = false;
tsconfig.compilerOptions.declaration = true;

fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
