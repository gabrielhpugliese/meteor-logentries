logentries = Npm.require('le_node');

Meteor.methods({
  'logentries/log': function (level, msg) {
    if (typeof le_meteor !== 'undefined') {
      le_meteor.log(level, msg);
    }
  }
});
