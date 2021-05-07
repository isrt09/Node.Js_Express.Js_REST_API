const router = require('express').Router()

const {
    allPersons,
    singlePerson,
    createPerson,
    updatePerson,
    deletePerson
} = require('./controller')

router.get('/',       allPersons)
router.get('/:id',    singlePerson)
router.post('/',      createPerson)
router.put('/:id',    updatePerson)
router.delete('/:id', deletePerson)

module.exports = router