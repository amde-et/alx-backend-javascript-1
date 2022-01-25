/**
 * Program executed on the cmd line
 */
process.stdout.write('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (name) => {
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing');
});
