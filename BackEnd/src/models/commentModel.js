const {Schema, model} = require('mongoose');

const commentSchema = new Schema (
    {
        body: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true
        },    
        liked: {
            type:[String],
            default:[]
        },
        unliked: {
            type:[String],
            default:[]
        },
        documentation_id: {
            type: ObjectId,
            required: true,
            ref: 'Documentation'
        },
    },
    {timestamps: true},
);

const commentModel = model('Comment', commentSchema);

module.exports = commentModel;