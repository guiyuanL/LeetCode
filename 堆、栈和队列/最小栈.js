/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.min_stack = [Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (x < this.min_stack[this.min_stack.length - 1]) {
    this.min_stack.push(x)
  } else {
    this.min_stack.push(this.min_stack[this.min_stack.length - 1])
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack) {
    this.min_stack.pop()
    return this.stack.pop()
  } else {
    return null
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min_stack[this.min_stack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
console.log(obj.getMin())
console.log(obj.pop())
console.log(obj.top())
console.log(obj.getMin())