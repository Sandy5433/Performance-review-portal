const { Schema, model} = require('mongoose');
const dayjs = require('dayjs')

const reportSchema = new Schema(
    {
        pro: {
            type: String,
            required: true,
        },
        con: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //getter method to format timestamp on query
            get: function (date){
              return dayjs(date).format('ddd D MMM, YYYY h:mm A')
            }
        },
        name: {
            type: String,
            required: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        toJSON: {
        virtuals: true,
        getters: true
        }
    },
);


const Report = model('Report', reportSchema)
module.exports = Report;