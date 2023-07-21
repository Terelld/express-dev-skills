const Ticket = require("../models/ticket");


// async function create(req, res) {
//     const flight = await Flight.findById(req.params.id);

//     flight.tickets.push(req.body);
// }

async function create(req, res) {
    
    const ticket = new Ticket (req.body)
    ticket['flight'] = req.params.id
    //console.log('This is the', flight);

    try {
      await ticket.save(req.body);
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/flights/${req.params.id}`);
}

function newTicket(req, res) {
    res.render('tickets/new', {errorMsg: '', id: req.params.id});
}

async function show(req, res) {
    const dispTicket = await Ticket.findById(req.params.id); //talking to dtaabase
    res.render('tickets/show', {ticket: dispTicket} ); //that data is stored in variable (foundFlight)
}



module.exports = {
    create,
    new: newTicket,
    show,
};

