const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/Sitecontroller')

router.get('/search', SiteController.search)
router.get('/', SiteController.home)

module.exports = router;