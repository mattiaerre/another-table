const express = require('express');
const moment = require('moment');

const router = express.Router();

router.get('/', (req, res) => {
  const parties = ['1 person'];
  for (let i = 2; i <= 20; i += 1) {
    parties.push(`${i} people`);
  }
  parties.push('Large party');

  const times = [];
  let current = moment('0001-01-01 00:00:00');
  const stop = moment('0001-01-02 00:00:00');
  while (current < stop) {
    times.push(current.format('h:mm A'));
    current = current.add(30, 'minutes');
  }

  const now = moment();

  const model = {
    title: 'Index | AnotherTable',
    parties,
    today: {
      date: now.format('YYYY-MM-DD'),
      time: now.add(30 - (now.minute() % 30), 'minutes').format('h:mm A')
    },
    times
  };
  res.render('index', model);
});

module.exports = router;
