const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const userSchema = new Scheme({
    username: String,
    strategy: String,
    strategyId: String,
    thumbnail: String
});

const User = mongoose.model('user',userSchema);

module.exports = User;