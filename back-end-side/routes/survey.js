const express = require("express");
const controlSurvey = require("../controllers/survey");
const router = express.Router();

//get all survey in db
router.get("/survey", (req, res, next) => {
    const data = controlSurvey.find({}).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(404).end()
    })
})

router.post("/survey", (req, res, next) => {
    controlSurvey.create(req.body).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(422).send(err.message)
    })
})



module.exports = router