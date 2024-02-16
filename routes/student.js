var express = require('express');
const { createStudentMiddleware, deleteStudentMiddleware, updateStudentMiddleware, allStudentMiddleware } = require('../middlewares/eleveMiddleware');
var router = express.Router();


router.post('/create', createStudentMiddleware); 
router.post('/delete', deleteStudentMiddleware);
router.post('/update', updateStudentMiddleware);
router.get('/all', allStudentMiddleware)

module.exports = router;
