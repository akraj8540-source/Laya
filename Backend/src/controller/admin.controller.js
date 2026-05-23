const adminModel = require('../models/admin.model');
const {uploadFile} = require('../services/storage.service')
const albumModel = require('../models/album.model');
const jwt = require('jsonwebtoken');

async function createAdmin(req, res) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admin privileges required.' });
  }
  const { title} = req.body;
  const file = req.file;
  const result = await uploadFile(file.buffer.toString('base64'));
  const admin = await adminModel.create({ 
  title,
            uri: `spotify:track:${Date.now()}`, 
            imageUrl: result.url,
             artist: req.user.id || req.user._id });
        res.status(201).json({ message: 'Music uploaded successfully', admin });
    } 

async function createAlbum(req, res) {
    
        const { title , music } = req.body;
        if(!title || !music) {
            return res.status(400).json({ message: 'Title and music are required' });
        }

        const album = await albumModel.create({ title, 
            music ,
             artist: req.user.id || req.user._id });

        res.status(201).json({ message: 'Album created successfully', album:{
            _id: album._id,
            title: album.title,
            music: album.music,
            artist: album.artist
        } });
    }

async function getAllMusic(req, res) {
    const music = await adminModel.find();
    res.status(200).json({message: 'Music retrieved successfully', music });
}    

module.exports = { createAdmin, createAlbum, getAllMusic };
