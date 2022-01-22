const router = require('express').Router();

const {
    getAllChat,
    getChatById,
    // getChatByChannel,
    // getAllPMChat,
    createChat,
    updateChat,
    deleteChat
  } = require('../../controllers/chat-controller');

// Set up GET all and POST at /api/chat
router
  .route('/')
  .get(getAllChat)
  .post(createChat);

// Set up GET one, PUT, and DELETE at /api/chat/:id
router
  .route('/:id')
  .get(getChatById)
  .put(updateChat)
  .delete(deleteChat);

// Set up GET by channel /api/chat/channel/channelId
router
  .route('/:chatChannel')
  .get(getAllChatByChannel);

// Set up GET PM by target user /api/chat/dq/dQTarget
router
.route('/dq/dqTarget')
  .get(getAllPMChat);
 
module.exports = router;