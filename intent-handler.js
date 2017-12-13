'use strict';

var Manager = require('./manager');

function IntentHandler() {
  var manager = new Manager();
  var startOverIntent = {
      name: 'AMAZON.StartOverIntent',
      utterances: {},
      callFunc: handleLaunchRequest
    },
    helpIntent = {
        name: 'AMAZON.HelpIntent',
        utterances: {},
        callFunc: handleHelpRequest
      },
    cancelIntent = {
      name: 'AMAZON.CancelIntent',
      utterances: {},
      callFunc: goodBye
    },
    repeatIntent = {
      name: 'AMAZON.RepeatIntent',
      utterances: {},
      callFunc: handleRepeatIntent
    },
    yesIntent = {
      name: 'AMAZON.YesIntent',
      utterances: {},
      callFunc: handleYesIntent
    },
    noIntent = {
      name: 'AMAZON.NoIntent',
      utterances: {},
      callFunc: handleNoIntent
    },
    stopIntent = {
      name: 'AMAZON.StopIntent',
      utterances: {},
      callFunc: goodBye
    };


  function handleHelpRequest(req, res) {
    var helpResponse = manager.getHelpText(res);
    res.say(helpResponse.sayText).reprompt(helpResponse.repromptText).shouldEndSession(false);
  }

  function handleStartOverIntent(req, res) {
    handleLaunchRequest(req, res);
  }

  function handleRepeatIntent(req, res) {
    var repeatText = res.sessionObject.get('repeatText');
    res.say(repeatText).shouldEndSession(false);
  }

  function handleLaunchRequest(req, res) {
    var texts = manager.getLaunchText(res);
    res.say(texts.sayText).reprompt(texts.repromptText).shouldEndSession(false);
  }

  function handleYesIntent(req, res) {
    var response = manager.getYesResponseText(res);
    var shouldEndSession = response.endSession === true ? true : false;
    res.say(response.sayText).reprompt(response.repromptText).shouldEndSession(shouldEndSession);
  }

  function handleNoIntent(req, res) {
    var response = manager.getNoResponseText(res);
    var shouldEndSession = response.endSession === true ? true : false;
    res.say(response.sayText).reprompt(response.repromptText).shouldEndSession(shouldEndSession);
  }

  function goodBye(req, res) {
    var response = manager.getGoodByeText(res);
    res.say(response.sayText).shouldEndSession(true);
  }

  return {
    handleLaunchRequest: handleLaunchRequest,
    cancelIntent: cancelIntent,
    helpIntent: helpIntent,
    stopIntent: stopIntent,
    repeatIntent: repeatIntent,
    startOverIntent: startOverIntent,
    yesIntent: yesIntent,
    noIntent: noIntent
  };
}

module.exports = IntentHandler;
