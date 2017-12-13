'use strict';
var Handler = require('../manager');
var chai = require('chai');
var should = chai.should()
  , expect = chai.expect;

describe('Hogwarts Manager', function() {
  var handler = new Handler();

  it ('init', function () {
    console.log('at least init correctly');

  });

  it('getLaunchText', function() {
    var texts = handler.getLaunchText();
    console.log(texts)
  });

  describe('getYesRepsonse', function() {
    it('getYesResponseText hair qestion', function() {
      var session = {
        index: 0
      }
      var texts = handler.getYesResponseText(session);
      console.log(texts)
    });

    it('getYesResponseText hair qestion 1', function() {
      var session = {
        index: 1
      }
      var texts = handler.getYesResponseText(session);
      console.log(texts)
    });

    it('getYesResponseText hair qestion 2', function() {
      var session = {
        index: 2
      }
      var texts = handler.getYesResponseText(session);
      console.log(texts)
    });

    it('getYesResponseText hair qestion 3', function() {
      var session = {
        index: 3
      }
      var texts = handler.getYesResponseText(session);
      console.log(texts)
    });

    it('getYesResponseText hair qestion 4', function() {
      var session = {
        index: 4
      }
      var texts = handler.getYesResponseText(session);
      console.log(texts)
    });

    it('getYesResponseText hair qestion 5', function() {
      var session = {
        index: 5
      }
      var texts = handler.getYesResponseText(session);
      console.log(texts)
    });

    it('getYesResponseText qestion 6', function() {
      var session = {
        index: 6
      }
      var texts = handler.getYesResponseText(session);
      console.log(texts)
    });


  })

  describe('getNoRepsonse', function() {
    it('getYesResponseText hair qestion', function() {
      var session = {
        index: 0
      }
      var texts = handler.getNoResponseText(session);
      console.log(texts)
    });

    it('getYesResponseText hair qestion 1', function() {
      var session = {
        index: 1
      }
      var texts = handler.getNoResponseText(session);
      console.log(texts)
    });

    it('getYesResponseText hair qestion 2', function() {
      var session = {
        index: 2
      }
      var texts = handler.getNoResponseText(session);
      console.log(texts)
    });

    it('getYesResponseText hair qestion 3', function() {
      var session = {
        index: 3
      }
      var texts = handler.getNoResponseText(session);
      console.log(texts)
    });

    it('getYesResponseText hair qestion 4', function() {
      var session = {
        index: 4
      }
      var texts = handler.getNoResponseText(session);
      console.log(texts)
    });

    it('getYesResponseText hair qestion 5', function() {
      var session = {
        index: 5
      }
      var texts = handler.getNoResponseText(session);
      console.log(texts)
    });

    it('getYesResponseText qestion 6', function() {
      var session = {
        index: 6
      }
      var texts = handler.getNoResponseText(session);
      console.log(texts)
    });


  })
});
