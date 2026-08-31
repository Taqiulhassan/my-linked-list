// 10-->5-->30

// This is just a visualization of a Linked List, not an actual Linked List implementation.

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 30,
//         next: null,
//       },
//     },
//   },
// };
// console.log(myLinkedList);

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
  }
}

const myLinkedList = new LinkedList(10);
