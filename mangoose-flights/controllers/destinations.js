const Flight = require('../models/flight')



async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    console.log('This is the', flight);
    flight.destinations.push(req.body);
    try {
      await flight.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/flights/${flight._id}`);
  }

module.exports = {
    create
};