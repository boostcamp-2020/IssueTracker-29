const express = require('express');
const milestoneMiddleware = require('../middlewares/milestone');
const router = express.Router();

router.get('/', milestoneMiddleware.readMilestone);
router.post('/', milestoneMiddleware.createMilestone);
router.put('/:milestoneid', milestoneMiddleware.updateMilestone);
router.delete('/:milestoneid', milestoneMiddleware.deleteMilestone);

module.exports = router;
