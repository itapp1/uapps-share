const router = require('express').Router();
const shareController = require('../controllers').share;

router.get('/:id', shareController.shareWithoutDB);
router.get('/db/:id', shareController.shareWithDB);

module.exports = router;