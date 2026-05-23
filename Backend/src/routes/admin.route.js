const express = require('express');
const adminController = require('../controller/admin.controller');
const {authadmin} = require('../middleware/auth.middleware');
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),

});

const router = express.Router();
router.post('/upload', authadmin, upload.single('music'), adminController.createAdmin);
router.post('/album', authadmin, adminController.createAlbum);
router.get('/music',  adminController.getAllMusic);

module.exports= router;