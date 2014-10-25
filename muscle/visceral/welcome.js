;(function() {
  'use strict';

  var HOX = require('../../gonads/hox-genes/muscle.hox');

  var $ = require('jquery');
  require('jquery-ui');

  var Section = require('./section.js');

  var WelcomeView = Section.View.extend({
    template: function() { return $('#welcome')[0]; },
    render: function() {
      Section.View.prototype.render.call(this);

      $(this.el).find('#tamuhack-logo').css({ top: '0' });
    },
    bindings: {
    },
    events: {
      'click #submitProject': 'goToSubmission'
    },
    goToSubmission: function(event) {
      event.preventDefault();

      this.destroy('submission');

      return this;
    }
  });

  var WelcomeModel = Section.Model.extend({
    initialize: function() {
      this.view = new WelcomeView({ model: this });
    }
  });

  module.exports = WelcomeModel;
})();
