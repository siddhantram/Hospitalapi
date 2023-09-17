const express = require('express');

const router = express.Router();

router.get('/', require('./api'));


router.use('/api', require('./api'));

module.exports = router;