const Person       = require('./Person')

exports.allPersons = (req,res)=> {

}

exports.singlePerson = (req,res)=> {
    
}

exports.createPerson = (req,res)=> {
    let { name,email, phone } = req.body
    let person = new Person({
        name,
        email,
        phone
    })
    person.save()
    .then(c=>{
        res.json(c)
    })
    .catch(e=>{
        console.log(e);
        res.json({
            message:'Problem occured'
        })
    })        
}

exports.updatePerson = (req,res)=> {
    
}

exports.deletePerson = (req,res)=> {
    
}