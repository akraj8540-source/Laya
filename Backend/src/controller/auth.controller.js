const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function register(req, res) {
    const { username, email, password, role="user" } = req.body;
    
    const isUserExist = await userModel.findOne({ $or: [{ email }, { username }] });
    if (isUserExist) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const bcryptPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({ username, email, password: bcryptPassword, role });

    const token = jwt.sign({ id: user._id, role: user.role },
         process.env.JWT_SECRET, { expiresIn: '1d' });

         res.cookie('token', token, { httpOnly: true, secure: false, sameSite: 'strict' });

    res.status(201).json({ message: 'User registered successfully', user: { 
        id: user._id, 
        username: user.username,
         email: user.email, 
         role: user.role } 
        });

    

}
async function login(req, res) {
    const {username, email, password } = req.body;

    const user = await userModel.findOne({ $or: [{ email }, { username }] });
    if (!user) {
        return res.status(401).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);

    res.cookie('token', token, { httpOnly: true, secure: false, sameSite: 'strict' });

    res.status(200).json({ message: 'Login successful', user:{
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role 
    }});
}

async function logout(req, res) {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
}

module.exports =  {
    register,
    login,
    logout
};