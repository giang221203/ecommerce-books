const express = require("express");
const router = express.Router()
const useController = require('../controllers/UserController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/Authmiddleware");
router.post('/sign-up', useController.createUser)
router.post('/sign-in', useController.loginUser)
router.post('/log-out', useController.logoutUser)
router.put('/update-user/:id',authUserMiddleWare, useController.updateUser)
router.delete('/delete-user/:id',authMiddleWare, useController.deleteUser)
router.get('/getAll', useController.getAllUser)
router.get('/get-details/:id',authUserMiddleWare, useController.getDetailsUser)
router.post('/refresh-token', useController.refreshToken)
module.exports = router