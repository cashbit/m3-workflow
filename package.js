/**
 * Created by cashbit on 19/06/15.
 */


/* Information about this package */
Package.describe({
    // Short two-sentence summary.
    summary: "workflow management for m3",
    // Version number.
    version: "1.0.0",
    // Optional.  Default is package directory name.
    name: "cashbit:m3workflow",
    // Optional github URL to your source repository.
    git: "https://github.com/cashbit/m3workflow.git"
});

/* This defines your actual package */
Package.onUse(function (api) {
    // If no version is specified for an 'api.use' dependency, use the
    // one defined in Meteor 0.9.0.
    api.versionsFrom('0.9.0');
    // Use Underscore package, but only on the server.
    // Version not specified, so it will be as of Meteor 0.9.0.
    //api.use('underscore', 'server');
    // Give users of this package access to the Templating package.
    //api.imply('templating')
    api.export('m3workflow');
    // Specify the source code for the package.
    api.addFiles('m3workflow.js');
});

/* This defines the tests for the package */
/*
Package.onTest(function (api) {
    // Sets up a dependency on this package
    api.use('username:package-name');
    // Allows you to use the 'tinytest' framework
    api.use('tinytest@1.0.0');
    // Specify the source code for the package tests
    api.addFiles('email_tests.js', 'server');
});
*/
