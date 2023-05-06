const router = require('express').Router();;
const userRoutes = require('./userRoutes');
const reportRoutes = require('./reportRoutes')

router.use('/users', userRoutes);
router.use('/reports', reportRoutes);

module.exports = router;
