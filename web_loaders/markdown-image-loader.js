module.exports = function(content) {
  this.cacheable && this.cacheable();
  return 'module.exports = ' + content
  .split(/(\!\[[^\]]*\]\([^\)]+\))/g)
  .map(function(piece) {
    var match = /(\!\[[^\]]*\]\()([^\)]+)(\))/g.exec(piece);
    if (match) {
      return JSON.stringify(match[1]) + ' + require(' + JSON.stringify('./' + match[2]) + ') + ' + JSON.stringify(match[3]);
    }
    return JSON.stringify(piece);
  })
  .join(' +\n') + ';';
};
