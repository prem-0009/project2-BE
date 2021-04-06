const User = require('./userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function createUser(user) {//--------------------------------------createUser
    let newUser = await new User({
        username: user.username, 
        email: user.email, 
        password: user.password
    });
    return newUser;
}

async function hashPassword(password) {//-------------------------------------------hash password
    let genSalt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, genSalt);
    return hashedPassword;
}

async function errorHandler(error) {//---------------------------------------------------error handler
    let errorMessage = null; 
    if (error.errmsg.includes('email_1')) {
        errorMessage = 'Email Already Exist! Please Choose Another One';
    } else if (error.errmsg.includes('username_1')) {
        errorMessage = 'Username Already Exist! Please Choose Another One';
    }
    return {
        status: 409,
        message: errorMessage
    };
}

async function findOneUser(email) {//-----------------------------------------------------find user with email
    try {
        let foundUser = await User.findOne({email});
        if (!foundUser) {
            return 404;
        }
        return foundUser;
    } catch (error) {
        return error;
    }
}

async function comparePassword(incomingPassword, userPassword) {//------------------------------------compare password
    try {

        let comparedPassword = await bcrypt.compare(incomingPassword, userPassword);
        if (comparedPassword) {
            return comparedPassword;
        } else {
            return 409;
        }

    } catch (error) {
        return error;
    }
}

async function createJwtToken(user) {//--------------------------------------------------------create token
    let payload = {
        id: user._id, 
        email: user.email, 
        username: user.username
    }
    let jwtToken = await jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: 3600});
    return jwtToken;
}

module.exports = {
    hashPassword,
    errorHandler,
    createUser,
    findOneUser,
    comparePassword,
    createJwtToken
}