const contacts = require('./Contact')

exports.getAllContacts = (req,res) => {
   res.json(contacts.getAllContacts())   
}

exports.createContact = (req,res) => {
    //res.json(contacts.createContact())
    //console.log(req.body);
    let {name, email, phone} = req.body
    let contact              = contacts.createContact({name,email,phone})    
    res.json(contact)
}

exports.getContactById = (req, res) => {
    let id      = req.params.id
 // id          = parseInt(id)
    let contact = contacts.getContactById(id)
    res.json(contact)
}

exports.updateContactById  = (req,res) => {
    let id                 = req.params.id
    let {name,email,phone} = req.body
    let contact            = contacts.updateContactById(id,{ name, email, phone })        
    res.json(contact)
}

exports.deleteContactById  = (req,res) => {
    let id                 = req.params.id
    let contact            = contacts.deleteContactById(id)
    res.json(contact)
}