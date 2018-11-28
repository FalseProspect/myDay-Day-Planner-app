const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const taskSchema = new Scheme({
    owner: String,
    task: String,
    tID: String,
    dateID: String,
    creationDate: String,
    completionDate: String,
    deletionDate: String
});

const Task = mongoose.model('task',taskSchema);

module.exports = Task;