/**
 * Program executed on the cmd line
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (name) => {
  console.log(`Your name is: ${name}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
