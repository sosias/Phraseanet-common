const _root = __dirname + '/../';

module.exports = {

    // path helpers
    _app: 'common',
    minified: 'common.min.js',
    dev: 'common.js',
    eslintDir: _root + '.eslintrc',
    distDir: _root + 'dist',
    sourceDir: _root + 'src',
    testDir: _root + 'tests',
    setupDir: _root + 'tests/setup/node.js',
    karmaConf: _root + 'config/karma.conf.js'
};
