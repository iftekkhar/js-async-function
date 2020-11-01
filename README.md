# JavaScript Async Function

The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

Async functions can contain zero or more await expressions. Await expressions suspend progress through an async function, yielding control and subsequently resuming progress only when an awaited promise-based asynchronous operation is either fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async / await enables the use of ordinary try / catch blocks around asynchronous code.
