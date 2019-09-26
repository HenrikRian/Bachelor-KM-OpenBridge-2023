// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    autoWatch: true,
    basePath: "",
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 50000,
    browsers: ["ChromeHeadless", "Chrome"],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    colors: true,
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "../coverage/openbridge-angular"),
      fixWebpackSourcePaths: true,
      reports: ["html", "lcovonly", "text-summary"],
    },
    customLaunchers: {
      ChromeHeadless: {
        base: "Chrome",
        flags: [
          "--headless",
          "--disable-gpu",
          "--no-sandbox",
          "--remote-debugging-port=9222",
        ],
      },
    },
    files: [{pattern: 'assets/styles/openbridge-day.css', included: false}],
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    logLevel: config.LOG_INFO,
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    port: 9876,
    reporters: config.angularCli && config.angularCli.codeCoverage
      ? ["progress", "coverage-istanbul"]
      : ["progress", "kjhtml"],
    restartOnFileChange: true,
    singleRun: false,
  });
};
