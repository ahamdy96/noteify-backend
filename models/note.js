const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

noteSchema = schema({
    author: {
        type: schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: String,
    body: String,
    dateCreated: {
        type: String,
        require: true
    },
    dateModified: {
        type: String,
        require: true
    }
},
    { timestamps: true }
);

noteSchema.plugin(uniqueValidator)

const noteModel = mongoose.model('note', noteSchema);

module.exports = noteModel;