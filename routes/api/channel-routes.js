const router = require('express').Router();

const {
    getAllChannels,
    getChannelById,
    createChannel,
    updateChannel,
    deleteChannel
  } = require('../../controllers/channel-controller');

// Set up GET all and POST at /api/channels
router
  .route('/')
  .get(getAllChannels)
  .post(createChannel);

// Set up GET one, PUT, and DELETE at /api/channels/:id
router
  .route('/:id')
  .get(getChannelById)
  .put(updateChannel)
  .delete(deleteChannel);

module.exports = router;