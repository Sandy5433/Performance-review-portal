const { Schema, model} = require('mongoose');
const dayjs = require('dayjs')

const reportSchema = new Schema(
    {
        strength: {
            type: String,
            required: true,
        },
        weakness: {
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
        author: {
            type: String,
            required: true,
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