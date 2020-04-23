const express = require('express');
const router = express.Router();
const axios = require('axios')
const baseURL = 'https://eprocbackend.azurewebsites.net/api/locationTrigger?code=K/RYlit64KaCaR6fTeZoNmxaah/B9k8tsy0GKZ6gs3po6gSCePTixw=='
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('config', {
    title: 'Vehicle Config App '
  });
});

router.post('/', function (req, res, next) {
  console.log(req.body);

  axios.post(baseURL, req.body)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  res.render('config', {
    title: 'Vehicle Config App '
  });
});


module.exports = router;