const express = require('express');
const router = express.Router();
const Job = require('../Models/Job_Model.js');

router.post('/createJob', async (req, res) => {
  try {
    const {
      form1,
      form2,
      form3
    } = req.body;
    const newJob = new Job({
      form1,
      form2,
      form3
    });
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
