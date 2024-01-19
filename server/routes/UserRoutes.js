const express = require('express');
const router = express.Router();
const Job = require('../Models/Job_Model.js');

router.get('/jobDetails', async (req, res) => {
  try {
    const jobsDetails = await Job.find({}, 'form1.position_name form1.Location form1.minimumSalary form1.maximumSalary');
    res.status(200).json(jobsDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
