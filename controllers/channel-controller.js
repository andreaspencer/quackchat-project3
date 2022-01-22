const { Channel } = require('../models');

const channelController = {
    // get all channels
    getAllChannels(req, res) {
      Channel.find({})
        .then(dbChannelData => res.json(dbChannelData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get channel by id
    getChannelById({ params }, res) {
      Channel.findOne({ _id: params.id })
        .then(dbChannelData => {
          if (!dbChannelData) {
            res.status(404).json({ message: 'No channel found with this id!' });
            return;
          }
          res.json(dbChannelData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    // create channel
    createChannel({ body }, res) {
    Channel.create(body)
      .then(dbChannelData => res.json(dbChannelData))
      .catch(err => res.status(400).json(err));
  },

    // update channel by id
    updateChannel({ params, body }, res) {
        Channel.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbChannelData => {
            if (!dbChannelData) {
            res.status(404).json({ message: 'No Channel found with this id!' });
            return;
            }
            res.json(dbChannelData);
        })
        .catch(err => res.status(400).json(err));
    },

// delete channel
deleteChannel({ params }, res) {
    Channel.findOneAndDelete({ _id: params.id })
      .then(dbChannrlData => {
        if (!dbChannelData) {
          res.status(404).json({ message: 'No channel found with this id!' });
          return;
        }
        res.json(dbChannelData);
      })
      .catch(err => res.status(400).json(err));
  }
}

module.exports = channelController;