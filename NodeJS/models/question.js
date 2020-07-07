const mongoose = require('mongoose');

var Question = mongoose.model('question', {
    Question: { type: String },
    QuestionNO: { type: String },
    option1: { type: String },
    option2: { type: String },
    option3: { type: String },
    option4: { type: String },
});

module.exports = { Question };