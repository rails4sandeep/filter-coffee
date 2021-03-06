'use strict';
var CLIEngine = require('eslint').CLIEngine;
var chalk = require('chalk');
var cli = new CLIEngine({});
var report;
var formatter;
var configOptions = {};

module.exports = {

  configFile: function (config) {
    configOptions.configFile = config || '.eslintrc';
  },

  ignorePath: function (ignore) {
    configOptions.ignorePath = ignore || '.eslintignore';
  },

  envs: function (envs) {
    configOptions.envs = envs;
  },

  extensions: function (extns) {
    configOptions.extensions = extns;
  },

  globals: function (globals) {
    configOptions.globals = globals;
  },

  rulePaths: function (rulePaths) {
    configOptions.rulePaths = rulePaths;
  },

  rules: function (rules) {
    configOptions.rules = rules;
  },

  parser: function (parser) {
    configOptions.parser = parser;
  },

  cache: function (cache) {
    configOptions.cache = cache;
  },

  cacheFile: function (cacheFile) {
    configOptions.cacheFile = cacheFile;
  },

  cacheLocation: function (cacheLocation) {
    configOptions.cacheLocation = cacheLocation;
  },

  mochalint: function (paths) {
    configOptions.configFile = configOptions.configFile || '.eslintrc';
    cli = new CLIEngine(configOptions);
    describe('eslint-filter-coffee', function () {
      paths.forEach(function (p) {
        it('should have no errors in ' + p, function () {
          try {
            report = cli.executeOnFiles([ p ]);
            formatter = cli.getFormatter('stylish');

            if (report && report.errorCount > 0) {
              throw new Error(chalk.red('code did not pass lint rules') + formatter(report.results));
            }

            if (report && report.warningCount > 0) {
              console.log(chalk.yellow('code has lint warnings') + formatter(report.results));
            }
          } catch (err) {
            console.log(err);
          }
        });
      });
    });
  }
};
