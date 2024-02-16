var express = require('express');
const { createSchoolMiddleware, deleteSchoolMiddleware, updateSchoolMiddleware, allSchoolMiddleware } = require('../middlewares/ecoleMiddleware');

var router = express.Router();


router.post('/create', createSchoolMiddleware); 
router.post('/delete', deleteSchoolMiddleware);
router.post('/update', updateSchoolMiddleware);
router.get('/all', allSchoolMiddleware)

module.exports = router;

