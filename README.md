# Unhandled Exception in Node.js Server

This repository demonstrates an example of an unhandled exception in a Node.js HTTP server and provides a solution to gracefully handle such errors.

## Bug

The `server.js` file contains a basic HTTP server.  However, it lacks proper error handling.  If an unexpected error occurs during request processing (e.g., database error, file system error), the server will crash without providing any information about the error. This makes debugging and maintaining the server difficult.

## Solution

The `server-solution.js` file demonstrates how to implement comprehensive error handling using `try...catch` blocks and event listeners for `uncaughtException` and `unhandledRejection`. This ensures that the server does not crash and provides more informative error messages, facilitating easier debugging and recovery.

## How to Reproduce the Bug

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node server.js`.
4. Attempt to trigger an error (e.g., by accessing a non-existent resource in your request handling logic).

You should observe the server crashing without a clear error message.

## How to Run the Solution

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node server-solution.js`.
4. Attempt to trigger an error (as before).

The solution handles the error gracefully, logging the error and preventing the server crash.