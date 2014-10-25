;(function() {
  'use strict';

  var HOX = require('../../gonads/hox-genes/muscle.hox');

  var $ = require('jquery');
  require('jquery-ui');

  var Section = require('./section.js');

  var SubmissionView = Section.View.extend({
    template: function() { return $('#submission')[0]; },
    bindings: {
      'model.name': {
        type: 'text',
        selector: '#greeting'
      }
    },
    events: {
      'submit form': 'submitProject'
    },
    submitProject: function(event) {
      event.preventDefault();

      var form = $(event.target);
      
      function getValue(name) {
        return form.find('input[name="' + name + '"]').val();
      }

      this.model.name = getValue('name');

      $.post('/project', {
        name: this.model.name,
        demoUrl: getValue('demoUrl'),
        githubUrl: getValue('githubUrl'),
        description: form.find('textarea[name="description"]').val(),
        memberName1: getValue('memberName1'),
        memberTwitter1: getValue('memberTwitter1'),
        memberSite1: getValue('memberSite1'),
        memberName2: getValue('memberName2'),
        memberTwitter2: getValue('memberTwitter2'),
        memberSite2: getValue('memberSite2'),
        memberName3: getValue('memberName3'),
        memberTwitter3: getValue('memberTwitter3'),
        memberSite3: getValue('memberSite3'),
        memberName4: getValue('memberName4'),
        memberTwitter4: getValue('memberTwitter4'),
        memberSite4: getValue('memberSite4')
      }, function(response) {
        CEREBELLUM.log.print('Response: ' + JSON.stringify(response));
      });

      window.location.assign('/welcome');

      return this;
    }
  });

  var SubmissionModel = Section.Model.extend({
    props: {
      name: 'string'
    },
    initialize: function() {
      this.view = new SubmissionView({ model: this });

      this.on('change:name', function(model) {
        var $el = $(model.view.el);
        $el.find('form').fadeOut(HOX.animationTime, function() {
          //$el.find('#greeting').prepend('Submission to Anatomy, ').append('!').fadeIn(HOX.animationTime);
        });
      }); 
    }
  });

  module.exports = SubmissionModel;
})();
