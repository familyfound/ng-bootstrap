
var query = require('query')
  , angular = require('angularjs');

// template:
//  - either the string of html, or an element which will be used
// parentDiv: selector OR element
// app: string or list - passed to angular.boostrap
// placement:
//  - int: index at which to insert
//  - "first": at the start
//  - "last": append
//  - el: before this element
function bootstrap(template, parentDiv, app, placement) {
  var div = document.createElement('div')
    , sel;
  if (typeof (template) !== 'string' && template.innerHTML) {
    div = template;
  } else {
    div.innerHTML = template;
    div = div.firstElementChild;
  }
  if (typeof (parentDiv) === 'string') {
    sel = parentDiv;
    parentDiv = query(parentDiv);
    if (!parentDiv) {
      console.error('Failed to find node:', sel, 'aborting bootstrap');
      return;
    }
  }
  if (placement == 'first') placement = 0;
  if (placement == 'last' || placement >= parentDiv.children.length) {
    parentDiv.appendChild(div);
  } else if (typeof(placement) === 'number') {
    parentDiv.insertBefore(div, parentDiv.children[placement]);
  } else {
    parentDiv.insertBefore(div, placement);
  }
  if (typeof(app) == 'string') {
    app = [app];
  }
  angular.bootstrap(div, app);
  return div;
}

module.exports = bootstrap;

module.exports.append = function (template, parentDiv, app) {
  return bootstrap(template, parentDiv, app, 'last');
};

module.exports.last = module.exports.append;

module.exports.first = function (template, parentDiv, app) {
  return bootstrap(template, parentDiv, app, 0);
};

