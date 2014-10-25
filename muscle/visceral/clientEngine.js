;(function() {
  'use strict';

  var Router = require('./router.js');
  var Welcome = require('./welcome.js');
  var Submission = require('./submission.js');

  var ClientEngine = function() {
    var self = this;

    self.welcome = new Welcome({ context: self });
    self.submission = new Submission({ context: self });

    self.router = new Router({ context: self });
    self.router.history.start({ pushState: true });
  };

  module.exports = ClientEngine;
})();
