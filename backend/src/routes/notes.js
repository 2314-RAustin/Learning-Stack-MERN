const { Router } = require('express');
const router =  Router();
const { getNotes, createNotes, updateNotes, deleteNotes, editItemNotes } = require('../controllers/notes.controllers');
const { getNotesID, createNotesID, updateNotesID, deleteNotesID, editItemNotesID } = require('../controllers/notes.controllers');

router.route('/')
    .get(getNotes)
    .post(createNotes)
    .put(updateNotes)
    .delete(deleteNotes)
    .patch(editItemNotes);

router.route('/:id')
    .get(getNotesID)
    .post(createNotesID)
    .put(updateNotesID)
    .delete(deleteNotesID)
    .patch(editItemNotesID);

module.exports = router;