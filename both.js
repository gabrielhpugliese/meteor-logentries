var MeteorLogger = function () {
};

MeteorLogger.prototype.log = function (level, msg) {
  Meteor.call('logentries/log', level, msg);
};

log = new MeteorLogger();
