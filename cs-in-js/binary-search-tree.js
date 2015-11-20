function BinarySearchTree() {
  this._root = null;
}

BinarySearchTree.prototype = {

  constructor: BinarySearchTree,

  add: function(value) {
    var node = {
      value: value,
      left: null,
      right: null,
    };
    if (this._root === null) {
      this._root = node;
    } else {
      current = this._root;

      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        } else {
          break;
        }
      }
    }
  },

  contains: function(value) {
    var found = false;
    var current = this._root;

    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    return found;
  },

  traverse: function(process) {
    function inOrder(node) {
      if (node) {
        if (node.left !== null) {
          inOrder(node.left);
        }

        process.call(this, node);
        if (node.right !== null) {
          inOrder(node.right);
        }
      }
    }

    inOrder(this._root);
  },

  remove: function(value) {
    var found = false;
    var parent = null;
    var current = this._root;
    var childCount;
    var replacement;
    var replacementParent;

    while (!found && current) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else {
        found = true;
      }
    }

    if (found) {
      childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);
    }

  },

  size: function() {
    var count = 0;
    var increment = function(node) {
      count++;
    };

    this.traverse(increment);
    return count;
  },

  toArray: function() {
    var result = [];
    this.traverse(function(node) {
      result.push(node.value);
    });

    return result;
  },

  toString: function() {
    return this.toArray().toString();
  },

};
