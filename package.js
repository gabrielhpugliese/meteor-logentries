Package.describe({
  summary: "Logentries packaged for Meteor",
  version: "0.0.1",
  git: "https://github.com/gabrielhpugliese/meteor-logentries",
  name: "gabrielhpugliese:logentries"
});

Npm.depends({'le_node': '0.2.1'});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');

  api.add_files(['both.js'], ['client', 'server']);
  api.add_files(['server.js'], 'server');

  api.export(['log', 'logentries'], 'server');
  api.export(['log'], ['client', 'server']);
});

