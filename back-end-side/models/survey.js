const mongoose = require("mongoose");

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const surveySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    ratings: {
        type: [{
            _id: false,
            comment: {
                type: String
            },
            genre: {
                type: String,
                required: true
            },
            ratings: {
                type: [{
                    _id: false,
                    genre: {
                        type: String,
                        required: true
                    },
                    track: {
                        type: String,
                        required: true
                    },
                    track_id: {
                        type: String,
                        required: true
                    },
                    rating: {
                        type: String,
                        required: true
                    }
                }],
                required: true
            }
        }],
        required: true
    }
});


const SurveyModel = mongoose.model("Survey", surveySchema);
module.exports = SurveyModel;