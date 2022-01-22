const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ChatSchema = new Schema ({
    chatId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
        },
    chatText: {
        type: String,
        required: 'ChatText is required',
        trim: true,
        minlength: 1,
        maxlength: 300
    },
    chatSender: {
        type: String,
        required: 'ChatSender is required'
    },
    // There will be a dedicated private message channel to make sure all 
    // chats have an assigned channel value
    chatChannel: {
        type: String,
        required: 'Channel is required'
    },
    // For private messages 
    chatTarget: {
        type: String,
    },
    chatDisplayed: {
        type: Boolean,
        defaut: false
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