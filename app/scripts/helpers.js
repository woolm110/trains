'use strict';

Object.defineProperty(Element.prototype, 'hasClass', {
  value: function(classname) {
    var classnames = this.getClasses();
    return classnames.indexOf(classname) > -1;
  },
  writable: true,
  configurable: true,
  enumerable: false
});

Object.defineProperty(Element.prototype, 'getClasses', {
  value: function() {
    if (this.className) {
      return this.className.split(' ');
    }
    return [];
  },
  writable: true,
  configurable: true,
  enumerable: false
});

Object.defineProperty(Element.prototype, 'addClass', {
  value: function(classname) {
    var classnames = this.getClasses();
    if (classnames.indexOf(classname) === -1) {
      classnames.push(classname);
      this.className = classnames.join(' ');
    }
    return this;
  },
  writable: true,
  configurable: true,
  enumerable: false
});

Object.defineProperty(Element.prototype, 'removeClass', {
  value: function(classname) {
    var classnames = this.getClasses(),
      i = classnames.indexOf(classname);
    if (i > -1) {
      classnames.splice(i, 1);
      this.className = classnames.join(' ');
    }
    return this;
  },
  writable: true,
  configurable: true,
  enumerable: false
});

Object.defineProperty(Element.prototype, 'toggleClass', {
  value: function(classname) {
    if (this.hasClass(classname)) {
      this.removeClass(classname);
    } else {
      this.addClass(classname);
    }
    return this;
  },
  writable: true,
  configurable: true,
  enumerable: false
});

Object.defineProperty(Element.prototype, 'empty', {
  value: function() {
    var x = [];
    for (var i = 0; i < this.childNodes.length; i++) {
      x.push(this.childNodes[i]);
    }
    for (var i = 0; i < x.length; i++) {
      this.removeChild(x[i]);
    }
    return this;
  },
  writable: true,
  configurable: true,
  enumerable: false
});

Object.defineProperty(Object.prototype, 'each', {
  value: function(cb, context) {
    context = context || this;
    return Array.prototype.forEach.call(this, function(child, index) {
      return cb.call(context, child, index);
    });
  },
  writable: true,
  configurable: true,
  enumerable: false
});

Object.defineProperty(Element.prototype, 'next', {
  value: function() {
    var nextSibling = this.nextSibling;
    while (nextSibling && nextSibling.nodeType != 1) {
      nextSibling = nextSibling.nextSibling
    }
    return nextSibling;
  },
  writable: true,
  configurable: true,
  enumerable: false
});

Object.defineProperty(Element.prototype, 'closest', {
  value: function(classname) {
    var parent = this.parentNode;
    while (parent != document.body) {
      if (parent && parent.classList.contains(classname)) {
        return parent;
      } else {
        parent = parent.parentNode;
      }
    }
    return null;
  },
  writable: true,
  configurable: true,
  enumerable: false
});

Object.defineProperty(Array.prototype, 'where', {
  value: function(parameter, value) {
    var
      tempArray = [],
      objProp = parameter;

    for (var i = this.length - 1; i >= 0; i -= 1) {
      if (this[i][objProp] === value) {
        tempArray.push(this[i]);
      }
    }
    return tempArray;
  }
});
