# NodeJS Basics

Topics aim was understanding the following concepts:

* run javascript using NodeJS
* use NodeJS modules
* use specific Node JS module to read files
* use `process` to access command line arguments and the environment
* create a small HTTP server using Node JS
* create a small HTTP server using Express JS
* create advanced routes with Express JS
* use ES6 with Node JS with Babel-node
* use Nodemon to develop faster

## Files

[database.csv](./database.csv)

[package.json](./package.json)

[babel.config.js](./babel.config.js)

[.eslintrc.js](./.eslintrc.js)

### Task 0

Function named `displayMessage` that prints in `STDOUT` the string argument.

[0-console.js](./0-console.js)

### Task 1

Program named 1-stdin.js that will be executed through command line:

* It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
* The user should be able to input their name on a new line
* The program should display `Your name is: INPUT`
* When the user ends the program, it should display `This important software is now closing` (followed by a new line)

[1-stdin.js](./1-stdin.js)

### Task 2

Contains method that reads from a file [database.csv](./database.csv) synchronously and returns the content of the file as a string.

[2-read-file.js](./2-read-file.js)

### Task 3

Contains method that reads from a file [database.csv](./database.csv) asynchronously and returns the content of the file as a string.

[3-read_file_async.js](./3-read_file_async.js)

### Task 4

Create a small HTTP server using the http module:

* It should be assigned to the variable `app` and this one must be exported
* HTTP server should listen on port `1245`
* Displays `Hello Holberton School!` in the page body for any endpoint as plain text

[4-http.js](./4-http.js)

### Task 5

Create a small HTTP server using the http module:

* It should be assigned to the variable app and this one must be exported
* HTTP server should listen on port 1245
* It should return plain text
* When the URL path is `/`, it should display `Hello Holberton School!` in the page body
* When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file [3-read_file_async.js](./3-read_file_async.js) (with and without the database) - the name of the database must be passed as argument of the file

[5-http.js](./5-http.js)

### Task 6

Create a small HTTP server using Express module:

* It should be assigned to the variable `app` and this one must be exported
* HTTP server should listen on port `1245`
* Displays `Hello Holberton School!` in the page body for the endpoint `/`

[6-http_express.js](./6-http_express.js)

### Task 7

Recreate the small HTTP server using Express module:

* It should be assigned to the variable app and this one must be exported
* HTTP server should listen on port 1245
* It should return plain text
* When the URL path is `/`, it should display `Hello Holberton School!` in the page body
* When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file [3-read_file_async.js](./3-read_file_async.js) (with and without the database) - the name of the database must be passed as argument of the file

[7-http_express.js](./7-http_express.js)

### Task 8

Obviously writing every part of a server within a single file is not sustainable. Let’s create a full server in a directory named `full_server`.

Since you have used ES6 and Babel in the past projects, let’s use `babel-node` to allow to use ES6 functions like `import` or `export`.
