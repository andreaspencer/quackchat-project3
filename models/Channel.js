const { Schema, model } = require('mongoose');

const ChannelSchema = new Schema ({
    channelId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
    channelTitle: {
        type: String,
        unique: true,
        required: 'ChannelTitle is required',
        trim: true
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