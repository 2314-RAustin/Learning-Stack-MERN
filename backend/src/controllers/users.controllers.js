const usersCtrl = {};

usersCtrl.getusers = (req, res) => res.json({route:'users routes',request:'get'});
usersCtrl.createusers = (req, res) => res.json({route:'users routes',request:'post'});
usersCtrl.updateusers = (req, res) => res.json({route:'users routes',request:'put'});
usersCtrl.deleteusers = (req, res) => res.json({route:'users routes',request:'delete'});
usersCtrl.editItemusers = (req, res) => res.json({route:'users routes',request:'patch'});

usersCtrl.getusersID = (req, res) => res.json({id:"", route:'users routes',request:'get'});
usersCtrl.createusersID = (req, res) => res.json({id:"", route:'users routes',request:'post'});
usersCtrl.updateusersID = (req, res) => res.json({id:"", route:'users routes',request:'put'});
usersCtrl.deleteusersID = (req, res) => res.json({id:"", route:'users routes',request:'delete'});
usersCtrl.editItemusersID = (req, res) => res.json({id:"", route:'users routes',request:'patch'});

module.exports = usersCtrl;