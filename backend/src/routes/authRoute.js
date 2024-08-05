//***ImportingPackages******//
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//***TestConnection*****//
router.get("/", authController.testConnection);

//***LoginGoogle******//
router.get('/auth/google', authController.googleLogin);

//****AfterGoogleLogin********//
router.get('/auth/google/callback', authController.googleCallback, authController.googleCallbackSuccess);

//****IfFailed******//
router.get('/auth/google/failure', authController.googleFailure);

//*****AfterLoginViewProfileDetails******//
router.get('/profile', authController.getProfile);

module.exports = router;
