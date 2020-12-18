const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'JoferoWeb' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contacto' });
});


router.get('/about', (req, res) => {
  res.render('about', { title: 'Nivel académico' });
});



module.exports = router;
