var express = require('express');
var router = express.Router();

/* var test = require('../controllers/controller');
test = new test();
 */

router.get('/', (req, res) => {
    res.send('Hello world');
});

module.exports = router;
