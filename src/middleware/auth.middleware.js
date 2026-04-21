const jwt = require('jsonwebtoken');

function authadmin(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized, you are not able to perform this action' });
    }   
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        

        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'you are not authorized to perform this action' });
        }
        req.user = decoded;

        next();
    } catch (error) {  
        console.error( 'jwt error:', error.message);
        return res.status(403).json({ message: 'you are not authorized to perform this action' });
    }
}

function authuser(req, res, next) {
    const token = req.cookies.token;   
   find().populate('artist', 'username');
    limit (10); 
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized, you are not able to perform this action' });
    
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error( 'jwt error:', error.message);
        return res.status(403).json({ message: 'you are not authorized to perform this action' });
        
    }
}



module.exports = { authadmin, authuser };