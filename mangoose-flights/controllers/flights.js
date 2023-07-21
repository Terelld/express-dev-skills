const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    new: newFlight,
    create,
    index,
    show
   
     // I need a create function..nt unde

};

//I used this create function in the todo's lab...it's not async though..

       


async function index(req, res) {
    let allFlights = await Flight.find();
    res.render('flights/index', {
        flights: await Flight.find()
    });
    
}

function newFlight(req, res) {
    res.render('flights/new', {errorMsg: ''});
}



async function create(req, res) {
    let newFlight = await Flight.create(req.body)
    console.log('in the flight controller', newFlight)
    res.redirect('/flights');
}

async function show(req, res) {
    const foundFlight = await Flight.findById(req.params.id);
    const foundTickets = await Ticket.find({flight: foundFlight._id})
    
    
    
    res.render('flights/show', {flight: foundFlight, tickets: foundTickets} ); //that data is stored in variable (foundFlight)
}

// Flight.findById(req.params.id, function(err, flight) {
//     Ticket.find({flight: flight._id}, function(err, tickets) {
//       // Now you can pass both the flight and tickets in the res.render call
//         res.render('flights', 'tickets');
//     });
// });