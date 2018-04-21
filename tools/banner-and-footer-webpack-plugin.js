const ConcatSource = require('webpack-core/lib/ConcatSource');

const date = new Date().toUTCString();

const banner = `/*
    --------------------------------------------------------------
    defi.js v${process.env.npm_package_version} (${date})
    By Andrey Gubanov http://github.com/finom
    Released under the MIT license
    More info: https://defi.js.org
    --------------------------------------------------------------
*/

`;

// a hack to make 2nd global variable
const footer = '';

class BannerAndFooterWebpackPlugin {
    apply(compiler) {
        compiler.plugin('compilation', (compilation) => {
            compilation.plugin('optimize-chunk-assets', (chunks, callback) => {
                Object.keys(compilation.assets).forEach((file) => {
                    const newSource = new ConcatSource(banner, compilation.assets[file], footer);
                    compilation.assets[file] = newSource;
                });

                callback();
            });
        });
    }
}

module.exports = BannerAndFooterWebpackPlugin;
