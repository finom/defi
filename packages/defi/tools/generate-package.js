const fs = require('fs');
const path = require('path');
const sourcePackage = require('../package');

const npmPackage = {};

for (const key of [
    'name',
    'version',
    'author',
    'repository',
    'license',
    'bugs',
    'homepage',
    'dependencies'
]) {
    const value = sourcePackage[key];
    if (!value) {
        throw Error(`"${key}" is not specified at package.json`);
    }

    npmPackage[key] = value;
}

console.log('generating package.json'); // eslint-disable-line no-console

const npmPackageString = JSON.stringify(npmPackage, null, '\t');

fs.writeFileSync(path.resolve(__dirname, '../npm/package.json'), npmPackageString, {
    encoding: 'utf8'
});
