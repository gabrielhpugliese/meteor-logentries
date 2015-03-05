if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  log.log('info', 'Worked from client!');
}

if (Meteor.isServer) {
  le_meteor = logentries.logger({
    token: 'YOUR_TOKEN_HERE'
  });
  log.log('info', 'Worked from server!');
}
