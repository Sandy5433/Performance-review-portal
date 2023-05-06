const Report = require('../models/Report');
const { signToken } = require('../utils/auth');

module.exports = {
    getReports(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleReport(req, res) {
    User.findOne({ _id: req.params.reportId })
      .select('-__v')
      .then((report) =>
        !report
          ? res.status(404).json({ message: 'No report with that ID' })
          : res.json(report)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new report
  createReport(req, res) {
    Report.create(req.body)
      .then((dbReportData) => {
        console.log(dbReportData)
        const token = signToken(dbReportData)
        !dbReportData
          ? res.status(400).json({ message: 'Something is wrong!' })
          : res.json( { token, dbReportData} )
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      });
  },

  //update report details
  updateReport(req, res) {
    Report.findOneAndUpdate(
      { _id: req.params.reportId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((report) =>
        !report
          ? res.status(404).json({ message: 'No report found with this id!' })
          : res.json(report)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // delete report by report ID
  deleteReport(req, res) {
    User.findOneAndRemove({ _id: req.params.reportId })
      .then((report) =>
        !report
          ? res.status(404).json({ message: 'No report with this id!' })
          : res.json({ message: 'report deleted!' }))
          .catch((err) => {
            console.log(err)
            res.status(500).json(err)
          });
  }
};
