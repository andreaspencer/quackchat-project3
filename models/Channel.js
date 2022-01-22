const { Schema, model, Types } = require('mongoose');

const ChannelSchema = new Schema ({
    channelId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
        },
    channelTitle: {
        type: String,
        unique: true,
        required: 'ChannelTitle is required',
        trim: true,
        unique: true,
        max: 20
    },
    channelBlurb: {
        type: String,
        trim: true,
        required: 'ChannelBlurb is required',
    }
},
{
    toJSON: {
        virtual: true,
        getters: true
    },
}
);

const Channel = model('Channel', ChannelSchema);

module.exports = Channel;