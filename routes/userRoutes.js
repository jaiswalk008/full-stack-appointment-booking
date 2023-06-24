const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/add-user',userController.getAdduser);

router.post('/add-user',userController.postAddUser);

router.get('/edit-user/:userId',userController.getEdituser);

router.delete('/delete-user/:userId',userController.deleteUser);

module.exports = router;
