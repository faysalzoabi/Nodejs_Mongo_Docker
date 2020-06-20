const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
    descriptin: String,
    complete: Boolean
});

module.exports.Todos = mongoose.model('Todos', todosSchema)