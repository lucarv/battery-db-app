const express = require('express');
const router = express.Router();
const axios = require('axios')
const url = process.env.URL

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('config', {
    title: 'Vehicle Config App '
  });
});

router.post('/', function (req, res, next) {

  axios.post(url, req.body)
    .then(function (response) {
      console.log(response.status);
    })
    .catch(function (error) {
      console.log(error);
    });

  res.render('config', {
    title: 'Vehicle Config App '
  });
});


module.exports = router;