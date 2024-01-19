const mongoose = require('mongoose');

const SentenceSchema = new mongoose.Schema({
    number: {
        type: Number,

    },
    sentence: {
        type: String,

    },
});

// Define the main schema with rounds
const JobSchema = new mongoose.Schema({
    form1: {
        position_name: {
            type: String,
        },

        company_name: {
            type: String,

        },

        jobPipeline: {
            type: String,

        },

        Location: {
            type: String,

        },

        ContractDetails: {
            type: String,
        },

        minimumSalary: {
            type: String,

        },

        maximumSalary: {
            type: String,

        },

        Currency: {
            type: String,
        },

        Frequency: {
            type: String,
        },
    },
    form2: {
        skills: {
            type: String,
        },

        intern_responsibility: {
            type: String,
        },
    },
    form3: {

        // rounds: [{
        //     name: {
        //         type: String,

        //     },
        //     description: {
        //         type: String,

        //     },
        // }],

        CheckSkills: {
            type: String,

        },

        Qualification: {
            type: String, // Assuming Qualification is a string, modify if needed

        },

        Questions: {
            type: String,

        },

        availability: {
            type: String, // Assuming availability is a string, modify if needed
        },
    }
});

// Create the model
const Job = mongoose.model('Job', JobSchema);

// Export the model
module.exports = Job;
