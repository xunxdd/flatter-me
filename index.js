var alexa = require('alexa-app');

var app = new alexa.app('flatter_me');

var intentHandler = require('./intent-handler');
var _ = require('lodash');

var IntentHandler = new intentHandler();
var intents = [
  IntentHandler.yesIntent,
  IntentHandler.helpIntent,
  IntentHandler.noIntent,
  IntentHandler.repeatIntent,
  IntentHandler.cancelIntent,
  IntentHandler.stopIntent,
  IntentHandler.startOverIntent,
];

app.launch(function (req, res) {
  return IntentHandler.handleLaunchRequest(req, res);
});

_.each(intents, function (intent) {
  app.intent(intent.name, intent.utterances, function (req, res) {
    return intent.callFunc(req, res);
  });
});

module.exports = app;
