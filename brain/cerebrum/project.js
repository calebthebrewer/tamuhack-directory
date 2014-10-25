;(function() {
  'use strict';

  var mongoose = require('mongoose');

  var ProjectSchema = new mongoose.Schema({
    name: String,
    demoUrl: String,
    githubUrl: String,
    description: String,
    members: [{
      name: String,
      twitter: String,
      siteUrl: String
    }]
  });

  module.exports = mongoose.model('Project', ProjectSchema);
})();
