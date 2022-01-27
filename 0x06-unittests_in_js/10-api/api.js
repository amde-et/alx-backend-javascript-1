const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 7865;

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, res) => {
  res.set('Content-Type', 'application/json');
  const availablePayments = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.send(availablePayments);
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  if (!username) {
    res.status(404).send();
  } else {
    res.send(`Welcome ${username}`);
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
