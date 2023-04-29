const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        report: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Report'
        }    
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const User = model('User', userSchema)
module.exports = User;