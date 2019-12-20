const usersCtrl = {};

const User = require('../models/User');

//OBTENER TODOS LOS USUARIOS
usersCtrl.getusers = async (req, res) => 
{
    const users = await User.find();
    res.json({users});
};

//CREAR UN USUARIO
usersCtrl.createusers  = async (req, res) => 
{
    const { username } = req.body;
    const newUser = new User(
    {
        username
    });

    await newUser.save();
    res.json({newUser});
};

usersCtrl.updateusers = (req, res) => res.json({route:'users routes',request:'put'});
usersCtrl.deleteusers = (req, res) => res.json({route:'users routes',request:'delete'});
usersCtrl.editItemusers = (req, res) => res.json({route:'users routes',request:'patch'});

//OBTENER UN USUARIO EN BASE A LA BUSQUEDA DE UN ID
usersCtrl.getusersID = async (req, res) => 
{
    const user  = await User.findById(req.params.id);
    res.json({user});
};

usersCtrl.createusersID = (req, res) => res.json({id:"", route:'users routes',request:'post'});

//ACTUALIZA INFORMACION DE UNA TAREA EN BASE AL CODIGO HASH O ID
usersCtrl.updateusersID = async(req, res) => 
{
    const { username } = req.body;
    const user = await User.findOneAndUpdate({_id:req.params.id},
    {
        username
    });

    res.json({username});
};

//ELIMINA DE LA BASE DE DATOS ESTE REGISTRO EN BASE A LA BUSQUEDA POR ID O HASH
usersCtrl.deleteusersID = async(req, res) => 
{
    const username = await User.findByIdAndDelete(req.params.id);

    res.json({username});
};

usersCtrl.editItemusersID = (req, res) => res.json({id:"", route:'users routes',request:'patch'});

module.exports = usersCtrl;