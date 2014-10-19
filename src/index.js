var bespoke = require('bespoke');

var classes = require('bespoke-classes');
var keys = require('bespoke-keys');
var touch = require('bespoke-touch');
var bullets = require('bespoke-bullets');
var backdrop = require('bespoke-backdrop');
var scale = require('bespoke-scale');
var hash = require('bespoke-hash');
var progress = require('bespoke-progress');
var forms = require('bespoke-forms');

module.exports = bespoke.from('#slides', [
  classes(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  forms(),
])
;
