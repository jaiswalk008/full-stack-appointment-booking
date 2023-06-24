const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/add-user',userController.getAdduser);

router.post('/add-user',userController.postAddUser);

router.get('/edit-user/:productId',userController.getEdituser);

router.post('/edit-user',userController.postEditUser);

router.post('/delete-user',userController.deleteUser);

module.exports = router;
