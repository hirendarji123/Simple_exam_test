const mongoose = require('mongoose');

var Answer = mongoose.model('answerkey',{
    QuestioNO: { type: String },
    answer: { type: String },

}
);

module.exports = { Answer };