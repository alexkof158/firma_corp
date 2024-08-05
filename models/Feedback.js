const { Schema, model } = require('mongoose');

const FeedbackSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        
    },
    comentario: {
        type: String,
        required: true
    }
});

module.exports = model('Feedback', FeedbackSchema);
