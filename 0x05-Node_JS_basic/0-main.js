const readDatabase = require('./full_server/utils');

readDatabase('database.csv')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
