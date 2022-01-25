/**
 * Program executed on the cmd line
 */
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', (name) => {
  process.stdout.write(`Your name is: ${name}`);
});

process.stdin.on('exit', () => {
  process.stdout.write('This important software is now closing');
});
