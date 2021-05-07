const Person       = require('./Person')

exports.allPersons = (req,res)=> {
    Person.find()
          .then(persons=>{
              res.json(persons)
          })
          .catch(e=>{
              console.log(e)
              res.json({
                  message:'Error Occured'
              })
          })
}

exports.singlePerson = (req,res)=> {
    let id = req.params.id
    Person.findById(id)
    .then(person=>{
        res.json(person)
    })
    .catch(e=>{
        console.log(e)
        res.json({
            message:'Error Occured'
        })
    })
}

exports.createPerson = (req,res)=> {
    let { name,email, phone } = req.body
    let person = new Person({
        name,
        email,
        phone
    })
    .then(person=>{
        res.json(person)
    })
    .catch(e=>{
        console.log(e)
        res.json({
            message:'Error Occured'
        })
    })   
}

exports.updatePerson = (req,res)=> {
    let id                   = req.params.id
    let {name, email, phone} = req.body
    Person.findOneAndUpdate(
         {
            _id:id
         },
         {
             $set:{ name, email, phone}
         },
         {
             new:true
         }
    )    
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

exports.deletePerson = (req,res)=> {
    let id = req.params.id
    Person.findOneAndDelete({ _id : id })
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