const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    music: [{
        type: String,
        ref: 'music',
        
    }],
    artist : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;