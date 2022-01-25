/**
 * Program executed on the cmd line
 */
process.stdout.write('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (name) => {
  process.stdout.write(`Your name is: ${name}`);
});

process.stdin.on('exit', () => {
  process.stdout.write('This important software is now closing');
});
