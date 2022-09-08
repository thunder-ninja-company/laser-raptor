module.exports = {
    require: ['test/helpers/init.js', '@babel/register'],
    ui: 'bdd',
    reporter: 'spec',
    growl: false,
    recursive: true,
    loader: '@babel/register',
    timeout: 60000,
    'watch-extensions': ['ts', 'tsx'],
};
