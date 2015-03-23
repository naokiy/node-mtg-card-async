var request = require('sync-request');

var DataStore = function(url) {
  this._url = url;
  this._data;
};

DataStore.prototype.get = function() {
  if (!this._data) {
    this._data = JSON.parse(request('GET', this._url, {json: true, cache: 'file'}).getBody().toString());
  }
  return this._data;
};

var allSetsX = new DataStore('http://mtgjson.com/json/AllSets-x.json');
var allSets = new DataStore('http://mtgjson.com/json/AllSets.json');
var allCardsX = new DataStore('http://mtgjson.com/json/AllCards-x.json');
var allCards = new DataStore('http://mtgjson.com/json/AllCards.json');

var loadFromUrl = function(url) {
  return JSON.parse(request('GET', this._url, {json: true, cache: 'file'}).getBody().toString());
}

var mtgCardSync = function(cardName, cardSet, withExtra) {
  if (!cardName) {
    throw new Error('card name not defined');
  }

  if (cardSet && typeof(cardSet) !== 'string') {
    withExtra = cardSet;
    cardSet = undefined;
  }

  if (cardSet) {
    var sets = (withExtra ? allSetsX.get(): allSets.get());
    if (sets && sets[cardSet]) {
      var cards = sets[cardSet].cards;
      var length = cards.length;
      for (var i = 0; i < length; i++) {
        if (cards[i].name === cardName) {
          return cards[i];
        }
      }
    }
  }
  var cards = (withExtra ? allCardsX.get(): allCards.get());
  if (cards && cards[cardName]) {
    return cards[cardName];
  }
  return undefined;
};

module.exports = mtgCardSync;