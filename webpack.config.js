const path = require('path');
const LWCWebpackPlugin = require('lwc-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'hgfBundle.js',
        path: path.resolve(__dirname, 'build')
    },
    mode: 'development',
    plugins: [
        new LWCWebpackPlugin({
            namespace: {
                // LWC namespace with path
                hgf: path.resolve('./node_modules/@sfdc-www/hgf-lwc-components/src/hgf')
            },
            modules: [
                {dir: './node_modules/@sfdc-www/hgf-lwc-components/src/hgf'}
            ]
        }),
    ]
};
