const { Router } = require('express');
const router =  Router();
const { getusers, createusers, updateusers, deleteusers, editItemusers } = require('../controllers/users.controllers');
const { getusersID, createusersID, updateusersID, deleteusersID, editItemusersID } = require('../controllers/users.controllers');

router.route('/')
    .get(getusers)
    .post(createusers)
    .put(updateusers)
    .delete(deleteusers)
    .patch(editItemusers);

router.route('/:id')
    .get(getusersID)
    .post(createusersID)
    .put(updateusersID)
    .delete(deleteusersID)
    .patch(editItemusersID);

module.exports = router;