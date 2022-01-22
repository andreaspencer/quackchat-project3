const { Chat } = require('../models');

const chatController = {
    // get all chat
    getAllChat(req, res) {
      Chat.find({})
        .then(dbChatData => res.json(dbChatData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get chat by id
    getChatById({ params }, res) {
      Chat.findOne({ _id: params.id })
        .then(dbChatData => {
          if (!dbChatData) {
            res.status(404).json({ message: 'No chat found with this id!' });
            return;
          }
          res.json(dbChatData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    // // get all chat by channel
    // getChatByChannel(req, res) {
    //     Chat.find({chatChannel: params.chatChannel})
    //       .then(dbChatData => res.json(dbChatData))
    //       .catch(err => {
    //         console.log(err);
    //         res.status(400).json(err);
    //       });
    //   },

    // // get private messages by DQTarget
    // getAllPMChat(req, res) {
    //     Chat.find({dQTarget: params.dQTarget})
    //         .then(dbChatData => res.json(dbChatData))
    //         .catch(err => {
    //         console.log(err);
    //         res.status(400).json(err);
    //         });
    //     },

    // create chat
    createChat({ body }, res) {
    Chat.create(body)
      .then(dbChatData => res.json(dbChatData))
      .catch(err => res.status(400).json(err));
  },

    // update chat by id
    updateChat({ params, body }, res) {
        Chat.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbChatData => {
            if (!dbChatData) {
            res.status(404).json({ message: 'No Chat found with this id!' });
            return;
            }
            res.json(dbChatData);
        })
        .catch(err => res.status(400).json(err));
    },

// delete chat
deleteChat({ params }, res) {
    Chat.findOneAndDelete({ _id: params.id })
      .then(dbChatData => {
        if (!dbChatData) {
          res.status(404).json({ message: 'No chat found with this id!' });
          return;
        }
        res.json(dbChatData);
      })
      .catch(err => res.status(400).json(err));
  }
}

module.exports = chatController;