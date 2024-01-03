# merge-sort

This is an assignment as part of the Odin Project to learn recursive algorithms. The assignment_1.js file has two functions for either iteratively or recursively printing an array of the Fibonacci sequence. The assignment_2.js contains an algorithmic function for performing merge sort on an array.

## Lessons Learned

- Using _.shift()_ to reduce the length of an existing array and fulfill a while loop condition more efficiently than setting a counter.
- Merging arrays by using _.push()._ with the spread operator, which mutates the original array. This is in contrast to methods like _.concat()_, which do not mutate the original array and therefore need to redefine it when called.