const express = require('express');
const { shortenUrl, redirectUrl, getUrlStats, deleteUrl } = require('../controllers/urlController');
const router = express.Router();

router.post('/shorten', shortenUrl);
router.get('/:code', redirectUrl);
router.get('/stats/:code', getUrlStats);
router.delete('/:code', deleteUrl);



module.exports = router;