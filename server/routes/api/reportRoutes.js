const router = require('express').Router();
const {
  getReports,
  getSingleReport,
  createReport,
  updateReport,
  deleteReport,
  getReportsByUser,
} = require('../../controllers/reportControllers');

// /api/reports
console.log("test")
router.route("/byUser").get(getReportsByUser)
router.route('/').get(getReports);
router.route('/').post(createReport);

// /api/reports/:reportId
router
  .route('/:reportId')
  .get(getSingleReport)
  .put(updateReport)
  .delete(deleteReport);


module.exports = router;
