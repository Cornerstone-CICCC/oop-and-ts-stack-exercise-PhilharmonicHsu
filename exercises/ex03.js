// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeDuplicates(stack) {
  const tempStack = new Stack();
  const filterStack = new Stack();

  while (!stack.isEmpty()) {
    const current = stack.pop();
    let isUnique = true;
    let duplicateFound = false;

    while (!tempStack.isEmpty()) {
      const elem = tempStack.pop();

      if (!duplicateFound && elem === current) {
        isUnique = false;
        duplicateFound = true;
      }
      filterStack.push(elem);
    }

    while (!filterStack.isEmpty()) {
      tempStack.push(filterStack.pop());
    }

    if (isUnique) {
      tempStack.push(current);
    }
  }

  while (!tempStack.isEmpty()) {
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