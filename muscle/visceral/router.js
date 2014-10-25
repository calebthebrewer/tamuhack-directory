;(function() {
  'use strict';

  var Router = require('ampersand-router');

  module.exports = Router.extend({
    initialize: function(options) {
      this.context = options.context;
    },
    routes: {
      '': 'welcome',
      'welcome': 'welcome',
      'submission': 'submission'
    },
    welcome: function() {
      this.context.welcome.view.render();
    },
    submission: function() {
      this.context.submission.view.render();
    }
  });
})();
