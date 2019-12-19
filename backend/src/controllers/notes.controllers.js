const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({route:'notes routes',request:'get'});
notesCtrl.createNotes = (req, res) => res.json({route:'notes routes',request:'post'});
notesCtrl.updateNotes = (req, res) => res.json({route:'notes routes',request:'put'});
notesCtrl.deleteNotes = (req, res) => res.json({route:'notes routes',request:'delete'});
notesCtrl.editItemNotes = (req, res) => res.json({route:'notes routes',request:'patch'});

notesCtrl.getNotesID = (req, res) => res.json({id:"", route:'notes routes',request:'get'});
notesCtrl.createNotesID = (req, res) => res.json({id:"", route:'notes routes',request:'post'});
notesCtrl.updateNotesID = (req, res) => res.json({id:"", route:'notes routes',request:'put'});
notesCtrl.deleteNotesID = (req, res) => res.json({id:"", route:'notes routes',request:'delete'});
notesCtrl.editItemNotesID = (req, res) => res.json({id:"", route:'notes routes',request:'patch'});

module.exports = notesCtrl;