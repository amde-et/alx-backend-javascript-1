/**
 * Program executed on the cmd line
 */
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', (name) => {
  console.log(`Your name is: ${name}`);
});

process.stdin.on('exit', () => {
  console.log('This important software is now closing');
});
