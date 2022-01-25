/**
 * Program executed on the cmd line
 */
console.log('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (name) => {
  console.log(`Your name is: ${name}`);
});

process.stdin.on('exit', () => {
  console.log('This important software is now closing\n');
});
