// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeDuplicates(stack) {
  const tempStack = new Stack();

  while (! stack.isEmpty()) {
    const filterStack = new Stack();
    const item = stack.pop();

    isUnique = true;

    while (! tempStack.isEmpty()) {
      const filterItem = tempStack.pop();

      if (item === filterItem) {
        isUnique = false;
      }

      filterStack.push(filterItem);
    }

    while (! filterStack.isEmpty()) {
      tempStack.push(filterStack.pop());
    }

    if (isUnique) {
      tempStack.push(item);
    }
  }

  while (! tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack)
console.log(stack.printStack()) // [2, 5, 1, 3]