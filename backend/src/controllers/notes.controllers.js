const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => { 
    const notes = await Note.find();
    res.json({notes});
};

notesCtrl.createNotes = async (req, res) => {
    const {title, content, date, author} = req.body;
    const newNote = new Note(
    {
        title,
        content,
        date,
        author
    });

    await newNote.save();

    res.json({route:'notes routes',request:'post'});
};

notesCtrl.updateNotes = (req, res) => res.json({route:'notes routes',request:'put'});
notesCtrl.deleteNotes = (req, res) => res.json({route:'notes routes',request:'delete'});
notesCtrl.editItemNotes = (req, res) => res.json({route:'notes routes',request:'patch'});

notesCtrl.getNotesID = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json({note});
};

notesCtrl.updateNotesID = async (req, res) => {
    const {title, content, author, date} = req.body;
    const note = await Note.findOneAndUpdate({_id: req.params.id},
    {
        title,
        content,
        author,
        date
    });
    res.json({note})
};

notesCtrl.deleteNotesID = async (req, res) => {
    const note = await Note.findByIdAndDelete(req.params.id); 
    res.json({note})
};

notesCtrl.createNotesID = (req, res) => res.json({id:"", route:'notes routes',request:'post'});
notesCtrl.editItemNotesID = (req, res) => res.json({id:"", route:'notes routes',request:'patch'});

module.exports = notesCtrl;