Immutable Data Patterns with Arrays and Objects
Immutability is an important concept of Functional Programming.

From Wikipedia

In computing, a persistent data structure is a data structure that always preserves the previous version of itself when it is modified. Such data structures are effectively immutable, as their operations do not (visibly) update the structure in-place, but instead always yield a new updated structure.

In other words...

Don’t mutate data, and if you have to – create a clone and mutate it.
Reuse unchanged parts. Only changed parts should be changed.