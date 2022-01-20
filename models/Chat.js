const { Schema, model } = require('mongoose');

const ChatSchema = new Schema ({
    chatId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
        },
    chatText: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 300
    },
    // There will be a dedicated private message channel to make sure all 
    // chats have an assigned channel value
    channel: {
        type: String,
        required: 'channel is required'
    },
    // For private messages 
    dQUser: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

const Chat = model('Chat', ChatSchema);

module.exports = Chat;