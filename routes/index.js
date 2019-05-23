const express = require('express');
const fighters = require('../date/fighters');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello world!');
});

router.get('/fighters', function(req, res, next) {
  res.json(fighters);
});

router.get('/fighters/:id', function(req, res, next) {
  const fighter = fighters.find(p => p._id === req.params.id);
  res.json(fighter);
});

router.post('/fighters', function(req, res, next) {
  fighters.push(req.body);
  res.json(fighters);
});

router.put('/fighters/:id', upload,  (req, res, next) => {
  const fighter = fighters.find(p => p._id === req.params.id);
  console.log("fighter", fighter);
  const fighterIndex = fighters.indexOf(fighter);
  fighters[fighterIndex] = { ...fighter, ...req.body};
  res.json(fighters[fighterIndex]);
});

router.delete('/fighters/:id', (req, res, next) => {
  const fighter = fighters.find(p => {
    return p._id === req.params.id;
  });
  const fighterIndex = fighters.indexOf(fighter);
  fighters.splice(fighterIndex, 1);
  res.json(fighters);
});

module.exports = router;
