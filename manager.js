'use strict';
var _ = require('lodash');

var openings = [
  "You look great today. Is that your picture next to 'charming' in the dictionary? ",
  "How is it that you always look great. You know what's awesome? Chocolate cake and your lovely face.",
  "You look great today. You're like sunshine on a rainy day. Your smile is contagious. ",
  'You look amazing today. If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.',
  "You look great today.  You may not be really, really good looking. But you're pretty close.",
]

var questions = [{
    "text": "did you do something to your hair?",
    "id": 1,
    "name": "hair",
    'yesText': 'that is wonderful! <break strength="strong" />',
    'noText': 'really? <emphasis level="moderate">It is hard to believe!</emphasis> <break strength="strong" />',
    "choices": [
      "Your hair looks so nice.",
      "You hair looks so cute.",
      "You look so cool, you are cool just the way you are. ",
      "I like your style.",
      "You look gorgeous -- and that's the least interesting thing about you, too."
    ]
  },
  {
    "text": "That shirt you are wearing is new or sort of, isn it not?",
    "id": 2,
    'yesText': '<emphasis level="strong">Looks great.</emphasis> ',
    'noText': 'really? <emphasis level="moderate">Seems new!</emphasis> ',
    "name": "color",
    "choices": [
      "It is absolutely lovely. It suits you nicely",
      "That color is perfect on you. It looks really nice",
      "Colors seem brighter when you're around.",
      "You're great at picking clothes. "
    ]
  },
  {
    "text": "You seem so capable. You are probably just about ***-years-old, are you?",
    "id": 3,
    "name": "age",
    'yesText': 'Ha, I knew it. <break strength="strong" />',
    'noText': 'No? Oops. Anyways. <break strength="strong" />',
    "choices": [
      "Wow. you are so young. You have a great future ahead of you. Learn to enjoy every minute of your life.",
      "Wow. you are so young. You have a good head on your shoulders.",
      "Wow. you are so young. You are smarter than google and mary poppins combined",
      "Wow. You are so young and special. There's ordinary, and then there's you.",
      "You are so young, yet you're like a candle in the darkness."
    ]
  },
  {
    "text": "Do you play music, do arts and crafts or the sort of things?",
    "id": 4,
    'yesText': 'How lovely! <break strength="strong" />',
    'noText': 'Oh, I am sure you do sometimes. <break strength="strong" />',
    "choices": [
      "You are so creative and fun. ",
      "Your creative potential seems limitless.",
      "Great. You're even more beautiful on the inside than you are on the outside.",
      "Your creativity is impressive.",
      "Everything would be better if more people were like you!",
      "You're one of a kind!",
      "When you make up your mind about something, nothing stands in your way.",
      "You're inspiring. You're a great example to others.",
      "You have the best ideas. You're a great example to others.",
      "You're always learning new things and trying to better yourself, which is awesome."
    ]
  },
  {
    "text": "Do you have homework today?",
    'yesText': 'Cool. <break strength="strong" />',
    'noText': 'No? You deserve a break. Everyone needs a holiday sometimes. <break strength="strong" />',
    "id": 5,
    "choices": [
      "You are really hard-working. ",
      "Your practice is really paying off.",
      "Your hard work makes your teachers proud.",
      "Your effort hasn't gone unnoticed",
      "You're great at figuring stuff out."
    ]
  },
  {
    "text": "You are doing well in school, are you?",
    'yesText': 'Cool.  Keep up the good work. <break strength="strong" />',
    'noText': 'Try harder. I am sure you will succeed <break strength="strong" />',
    "id": 6,
    "choices": [
      "You are a joy. ",
      "I am sure there is a great future ahead of you ",
      "The more you learn, the more places you will go. ",
      "Your teacher always loves to have you around. ",
      "You are always hungry for knowledge, curious to learn, "
    ]
  },
  {
    "text": "You like jokes, do you?",
    'yesText': '<emphasis level="moderate">Of course you do!</emphasis> <break strength="strong" />',
    'noText': 'No? You got to be joking! ha, ha, ha! <break strength="strong" />',
    "id": 7,
    "choices": [
      "You have a great sense of humor",
      "You're more fun than bubble wrap.",
      "The people you love are lucky to have you in their lives.",
      "How do you keep being so funny and making everyone laugh?",
      "You're more fun than a ball pit filled with candy.",
      "Jokes are funnier when you tell them.",
      "Being around you is like being on a happy little vacation."
    ]
  },
  {
    "text": "have  you been reading any books recently?",
    'yesText': '<emphasis level="moderate">Fabulous! Surely you have</emphasis><break strength="strong" />',
    'noText': 'No? No way. There is no way you have not been reading.<break strength="strong" /> ',
    "id": 8,
    "choices": [
      "Your perspective is always refreshing. ",
      "You always have great insights. ",
      "You are such a great reader and you read so much. ",
      "Everyone loves it when you read and talk about books. ",
      "You have such a great taste in books"
    ]
  },
  {
    "text": "have you been playing with your friends?",
    'yesText': '<emphasis level="moderate">How wonderful. </emphasis><break strength="strong" />',
    'noText': 'No? No way. You are so great with people. <break strength="strong" /> ',
    "id": 8,
    "choices": [
      "When anything goes wrong, you're always the first person your friends want to talk to. ",
      "You always give incredible advice because you usually know what to do and what to say. ",
      "You're legitimately one of the best people.  ",
      "Your friends are always comfortable around you.  ",
      "You are really pretty great. Everyone loves to have you around. "
    ]
  }
];

var endQuestion = {
  "text": "ok, I got to go now. Can I say something? ",
  "id": 8,
  "choices": [
    "You are the most perfect of you there is. You're strong. You're an awesome. You light up the room. You should be proud of yourself.",
    "On a scale from 1 to 10, you're an 11. You are making a difference.",
    "You're really something special. You're a smart cookie. You're a gift to those around you. You should be proud of yourself",
    "Your smile is contagious, you have great manners. You're all that and a super-size bag of chips.",
    "You are adorable. If you were a box of crayons, you'd be the giant name-brand one with the built-in sharpener.",
    "You're someone's reason to smile. You're even better than a unicorn, because you're real.",
    "Actions speak louder than words, and yours tell an incredible story. You are so smart, strong and brave you could survive a Zombie apocalypse. Everyone loves you. ",
    "Actions speak louder than words, and yours tell an incredible story. "
  ]
};

function Manager() {
  var welcomeText = '<emphasis level="moderate">Hello!</emphasis> ';

  function getHelpText(res) {
    var helpText = 'If you would like to start all over again, just say: <emphasis level="moderate">Start Over</emphasis> <break strength="strong" />' +
                  'If you would like me to stop, just say <emphasis level="moderate">Stop</emphasis> or <emphasis level="moderate">Cancel</emphasis> <break strength="strong" />' +
                  'If you would like me to repeat, just say <emphasis level="moderate">Repeat</emphasis>. <break strength="strong" />' +
                  'Otherwise, just relax and chat along. So would you like to continue? ';

    setSession('help-session', 'true', res);

    return {
      sayText: 'Help? Sure. ' + helpText,
      repromptText: helpText
    }
  }

  function getGoodByeText() {
    var sayText = 'Ok. ' + '<break strength="strong" />';
    return {
      sayText: sayText + ' Goodbye. Hope to talk to you soon. ',
      endSession: true
    }
  }

  function pickOne(arr) {
    return _.shuffle(arr)[0];
  }

  function getLaunchText(res) {
    var question = questions[0];
    setSession('index', 0, res);
    console.log(res.sessionObject.get('index'))
    var startText = pickOne(openings) + ' <break strength="strong"/>' + question.text;
    setSession('repeatText', startText, res);
    return {
      sayText: welcomeText + startText,
      repromptText: startText
    }
  }

  function finishUpQuestion(question, yesAnswer) {
    var preText;
    if (yesAnswer) {
      preText = question.yesText || '';
    } else {
      preText = question.noText || '';
    }

    var responseText = preText + pickOne(question.choices);

    var sayText = responseText + ' <break strength="strong"/>' + endQuestion.text + ' <break strength="strong"/>' + pickOne(endQuestion.choices);
    return {
      sayText: sayText + ' Goodbye. Hope to talk to you soon. ',
      endSession: true
    }
  }

  function handleHelpResponse(res, yesAnswer) {
      setSession('help-session', undefined, res);
      var repeatText = res.sessionObject.get('repeatText');
      if (yesAnswer) {
        return {
          sayText: repeatText,
          repromptText: repeatText
        }
      }

      return getGoodByeText();
  }

  function getResponseText(res, yesAnswer) {
    var helpSession = res.sessionObject.get('help-session');

    if (helpSession === 'true') {
      return handleHelpResponse(res, yesAnswer);
    }

    var questionIndex = res.sessionObject.get('index');
    console.log(questionIndex);
    var nextIdx = questionIndex + 1,
      question = questions[questionIndex],
      nextQuestion = nextIdx > questions.length ? null : questions[nextIdx],
      nextQuestionText = nextQuestion ? '  <break strength="strong"/>' + nextQuestion.text : '';
      console.log(questionIndex, nextIdx, questions.length);
    var ages = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    if (nextQuestionText.indexOf('***-years-old') > 0) {
        var age = pickOne(ages);
        nextQuestionText = nextQuestionText.replace('***-years-old', `${age} years old`);
    }
    if (!nextQuestion) {
      return finishUpQuestion(question, yesAnswer);
    }
    var preText;
    if (yesAnswer) {
      preText = question.yesText || '';
    } else {
      preText = question.noText || '';
    }
    var sayText = preText + pickOne(question.choices) + nextQuestionText;

    setSession('repeatText', sayText, res);
    setSession('index', nextIdx, res);
    return {
      sayText: sayText,
      repromptText: sayText
    }
  }

  function getNoResponseText(res) {
    return getResponseText(res, false)
  }

  function getYesResponseText(res) {
    return getResponseText(res, true)
  }

  function setSession(key, value, res) {
    res.sessionObject.set(key, value)
  }

  return {
    getLaunchText: getLaunchText,
    getGoodByeText: getGoodByeText,
    getHelpText: getHelpText,
    getNoResponseText: getNoResponseText,
    getYesResponseText: getYesResponseText
  }
}

module.exports = Manager;
