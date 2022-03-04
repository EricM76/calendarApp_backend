const bcryptjs = require('bcryptjs');
const User = require('../database/models/User');

module.exports = {
    userCreate : async (req,res) => {

        const {email, password} = req.body;

        try {

           let user = await User.findOne({
               email
           })

           if(user){
               return res.status(400).json({
                   ok : false,
                   msg : 'El email ya se encuentra registrado'
               })
           }

           user = new User(req.body);
           user.password = bcryptjs.hashSync(password, 10);
           //console.log(user)

           await user.save();

           return res.status(201).json({
               ok : true,
               uid : user.id,
               name : user.name
           })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg : 'Contáctese con el administrador del sitio',
                error
            })
        }

    }
}