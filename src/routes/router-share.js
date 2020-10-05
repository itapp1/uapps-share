const router = require('express').Router();
const shareController = require('../controllers').share;

router.get('/', shareController.shareWithoutDB);
router.get('/db', shareController.shareWithDB);

module.exports = router;