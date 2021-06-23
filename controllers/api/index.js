const router = require('express').Router();

router.use('/users', require('./userRoutes'));
router.use('/jobopportunities', require('./jobOpportunityRoutes'));

module.exports = router;
