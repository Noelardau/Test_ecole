var express = require('express');
const { createUserMiddleware, deleteUserMiddleware, updateUserMidleware, allUserMiddleware } = require('../middlewares/userMiddlewares');
var router = express.Router();

// POST /myschool.api/user/create 
router.post('/create', createUserMiddleware); // body : user object
router.post('/delete', deleteUserMiddleware);
router.post('/update', updateUserMidleware);
router.get('/all', allUserMiddleware)

module.exports = router;
