const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    text:String,
    completed:Boolean,
    color:String
 });

const Task = mongoose.model('task', TaskSchema);

module.exports = Task;