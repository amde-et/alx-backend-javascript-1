console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    console.log(`Your name is: ${name}`);
  }
});

process.stdin.on('exit', () => {
  console.log('This important software is now closing');
});
