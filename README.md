# node-mtg-card-sync

Synchronous get MTG card information from http://magicinfo.com/ .

## install

```sh
$ npm install mtg-card-sync
```

## usage

### Get simple data.

get data from allCards.json.

```js
var requestCard = require('mtg-card-sync');

console.log(requestCard('Unsummon'));

// { layout: 'normal',
//   name: 'Unsummon',
//   manaCost: '{U}',
//   cmc: 1,
//   colors: [ 'Blue' ],
//   type: 'Instant',
//   types: [ 'Instant' ],
//   text: 'Return target creature to its owner\'s hand.',
//   imageName: 'unsummon' }
```

### Get with cardSet.

Pass a name of card set to get data with in the card set (from allSets.json).

```js
var requestCard = require('mtg-card-sync');

console.log(requestCard('Unsummon', '5ED'));

// { layout: 'normal',
//   type: 'Instant',
//   types: [ 'Instant' ],
//   colors: [ 'Blue' ],
//   multiverseid: 3953,
//   name: 'Unsummon',
//   cmc: 1,
//   rarity: 'Common',
//   artist: 'Douglas Shuler',
//   manaCost: '{U}',
//   text: 'Return target creature to its owner\'s hand.',
//   imageName: 'unsummon' }
```

### Get with extra data.

Pass true to get data with extra data (from allCards-x.json / allSets-x.json )

```js
var requestCard = require('mtg-card-sync');

console.log(requestCard('Fire', true));

// { layout: 'split',
//   name: 'Fire',
//   names: [ 'Fire', 'Ice' ],
//   manaCost: '{1}{R}',
//   cmc: 2,
//   colors: [ 'Red' ],
//   type: 'Instant',
//   types: [ 'Instant' ],
//   text: 'Fire deals 2 damage divided as you choose among one or two target creatures and/or players.',
//   imageName: 'fire',
//   printings:
//    [ 'Friday Night Magic',
//      'Apocalypse',
//      'Magic: The Gathering-Commander',
//      'Duel Decks: Izzet vs. Golgari' ],
//   legalities:
//    { 'Invasion Block': 'Legal',
//      Legacy: 'Legal',
//      Vintage: 'Legal',
//      Freeform: 'Legal',
//      Prismatic: 'Legal',
//      'Tribal Wars Legacy': 'Legal',
//      'Singleton 100': 'Legal',
//      Commander: 'Legal' } }
```