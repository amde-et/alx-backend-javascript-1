/**
 * displayMessage: displays a message in the console
 * @message {message to be printed to stdout}
 */
const displayMessage = (message) => {
  process.stdout.write(message);
};

module.exports = displayMessage;
