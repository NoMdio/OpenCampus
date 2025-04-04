const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['contributor', 'moderator', 'admin'], default: 'contributor' },
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('passowrd')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.pawword, salt);
    next();
});

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, TouchList.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;