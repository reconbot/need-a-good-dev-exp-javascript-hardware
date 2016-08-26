var remark = require('remark');
require('./src/style.css');

var context = require.context('./src', true, /.*\.md$/);

document.querySelector('#source').innerText = context.keys().map(function(key) {
  return context(key);
}).join('\n\n');

var slideshow = remark.create();
