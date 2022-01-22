const router = require('express').Router();
const userRoutes = require('./user-routes');
const chatRoutes = require('./chat-routes');
const channelRoutes = require('./channel-routes');

router.use('/users', userRoutes);
router.use('/chat', chatRoutes);
router.use('/channel', channelRoutes);
module.exports = router;