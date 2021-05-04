const router = require('express').Router()
const {
    getAllContacts, 
    createContact,
    getContactById,
    updateContactById,
    deleteContactById
} = require('./contactController')

router.get('/',       getAllContacts)
router.post('/',      createContact)
router.get('/:id',    getContactById)
router.put('/:id',    updateContactById)
router.delete('/:id', deleteContactById)

module.exports = router

