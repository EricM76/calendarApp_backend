const Event = require('../database/models/Event');

module.exports = {
    all : async (req,res) => {

        try {

            const events = await Event.find().populate('user','name');
            
            return res.status(200).json({
                ok :true,
                total : events.length,
                data : events,
            })
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Contáctese con el administrador del sitio',
                error
            })
        }

    },
    create : async (req,res) => {

        const event = new Event(req.body);

        try {

            event.user = req.uid;

            await event.save();

            return res.status(200).json({
                ok :true,
                msg : 'Evento guadado con éxito!'
            })
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Contáctese con el administrador del sitio',
                error
            })
        }

    },
    update : async (req,res) => {

        const {id} = req.params;

        try {

            const event = await Event.findById(id);

            if(!event){
                return res.status(404).json({
                    ok : false,
                    msg : 'El evento no existe'
                })
            }

            if(event.user.toString() !== req.uid){
                return res.status(401).json({
                    ok : false,
                    msg : 'No está autorizado para editar este evento'
                })
            }

            const eventUpdate = {
                ...req.body,
                user : req.uid
            }

            await Event.findByIdAndUpdate(id, eventUpdate);

            return res.status(200).json({
                ok : true,
                msg : 'Evento actualizado con éxito'
            })

            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Contáctese con el administrador del sitio',
                error
            })
        }
    },
    remove : async (req,res) => {

        const {id} = req.params;

        try {

            const event = await Event.findById(id);

            if(!event){
                return res.status(404).json({
                    ok : false,
                    msg : 'El evento no existe'
                })
            }

            if(event.user.toString() !== req.uid){
                return res.status(401).json({
                    ok : false,
                    msg : 'No está autorizado para eliminar este evento'
                })
            }

            await Event.findByIdAndDelete(id);

            return res.status(200).json({
                ok : true,
                msg : 'Evento eliminado con éxito'
            })
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Contáctese con el administrador del sitio',
                error
            })
        }
    }
}