const Survey = require("../models/survey");


const find = () => {
    return Survey.find();
};

const create = (body) => {
    console.log(body)
    return Survey.create(body);
};



module.exports = {
    create,
    find
};
