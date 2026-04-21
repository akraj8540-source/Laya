const mongoose = require('mongoose');
const  router  = require('../routes/admin.route');

const adminSchema = new mongoose.Schema({
    uri : {
        type: String,   
        required: true,    
    },
        title : {
        type: String,       
    },
    artist : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

