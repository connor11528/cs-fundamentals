# Interview Prep Curriculum

This is meant to shore up computer science fundamentals for the self taught programmer.

## 0. Resources

- Bradfield School of Computer Science [Practical Algorithms and Data Structures](https://bradfieldcs.com/algos/)

- Stephen Grider's [Coding Interview Bootcamp on Udemy](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/)

- Rithm School [Computer Science Fundamentals with Javascript](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals)

- Khan Academy [Algorithms course](https://www.khanacademy.org/computing/computer-science/algorithms)

## 1. Time and space complexity: Big O Notation

**Courses and Reading**

- Read "Analysis" section of **Practical Algorithms and Data Structures**

![constant, logarithmic, linear, log linear, quadratic, cubic, exponential](https://i.imgur.com/Y8UqTmX.png)

![graph of algo performance](https://i.imgur.com/jhsvwNF.png)

- Review time complexity of [anagram solutions](01-big-o/anagrams.js)

- (todo) Complete "Introduction to Big O Notation" from **Computer Science Fundamentals with Javascript**

- (todo) Complete "Asymptotic notation" section of **Algorithms course**

## 2. Data Structures I

### Stacks

- "Stack 'Em Up With Stacks" section of **Udemy course** ([stack implementation](../udemy-interview-bootcamp-course/data_structures/stack.js))

- Read "Stacks" section of **Practical Algorithms and Data Structures**

```
Abstract Data Type of a Stack:

- Stack() creates a new, empty stack
- push(item) adds the given item to the top of the stack and returns nothing
- pop() removes and returns the top item from the stack
- peek() returns the top item from the stack but doesn’t remove it (the stack isn’t modified)
- is_empty() returns a boolean representing whether the stack is empty
- size() returns the number of items on the stack as an integer
```

- Review [balancedPairings](02-stacks/balancedPairings.js) and [convertToBinary](02-stacks/convertToBinary.js).

### Queues

- Read "Queues" section of **Practical Algorithms and Data Structures**

- "The Queue" and "Underwater Queue Weaving" section of **Udemy course** ([queue implementation](../udemy-interview-bootcamp-course/data_structures/queue.js))

```
Abstract Data Type of a Queue:

- Queue() creates a new queue that is empty. It needs no parameters and returns an empty queue.
- enqueue(item) adds a new item to the rear of the queue. It needs the item and returns nothing.
- dequeue() removes the front item from the queue. It needs no parameters and returns the item. The queue is modified.
- is_empty() tests to see whether the queue is empty. It needs no parameters and returns a boolean value.
- size() returns the number of items in the queue. It needs no parameters and returns an integer.
```

- Review [hot potato](03-queues/hotPotato.js)

### Deques

- Read "Deques" section of **Practical Algorithms and Data Structures**

> New items can be added at either the front or the rear. Likewise, existing items can be removed from either end. In a sense, this hybrid linear structure provides all the capabilities of stacks and queues in a single data structure.

![](https://bradfieldcs.com/algos/deques/introduction/figures/basic-deque.png)

- Review [palindrome checker](04-deques/palindrome.js)

### Lists

- Read "Lists" section of **Practical Algorithms and Data Structures**

> When discussing the list abstract data type, we consider a list to be a collection of items where each item holds a relative position with respect to the others.

> The members of a list are commonly refered to as nodes. When each node holds a reference to the next node in the list, we call this a **singly linked list**. When each node holds a reference to both the next and previous nodes in the list, we call this a **doubly linked list**.

> **Linked list traversal** refers to the process of systematically visiting each node in a linked list.

- "Linked List" section of **Udemy course** ([linked list implementation](../udemy-interview-bootcamp-course/data_structures/linked_list.js))

- Review [midpoint](../udemy-interview-bootcamp-course/16_midpoint.js) from **Udemy course**

## 3. Recursion

- Bradfield CS: [Recursion](https://bradfieldcs.com/algos/recursion/introduction/)

- Rithm School: [Recursion](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/introduction-to-recursion)


## 4. Searching and Sorting

- Bradfield CS: [Searching](https://bradfieldcs.com/algos/searching/searching/)

- Rithm School: [Searching](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/searching-algorithms), [Sorting](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms), [Intermediate Sorting](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/intermediate-sorting-algorithms)


## 5. Data Structures II

### Trees

- Bradfield CS: [Trees](https://bradfieldcs.com/algos/trees/introduction/)

### Graphs

- Bradfield CS: [Graphs](https://bradfieldcs.com/algos/graphs/introduction/)

- Rithm School: [Graphs](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/introduction-to-graphs)

### Hash Map

- Rithm School: [Hash Map / Hash Table](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/introduction-to-hash-tables)

## 6. Dynamic Programming

- Rithm School: [Dynamic Programming](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/dynamic-programming)


