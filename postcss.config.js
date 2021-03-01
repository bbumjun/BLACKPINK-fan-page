const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
module.exports = {
    syntax : 'postcss-scss',
    plugins:[
        autoprefixer,
        postcssPresetEnv
    ]
}