const Flight = require("../models/flight");

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);

    flight.details.push(req.body);
}

module.exports = {
   
    create

};
