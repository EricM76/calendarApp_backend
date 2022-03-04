require('dotenv').config();
const jwt = require('jsonwebtoken');

const JWTGenerator = (uid, name) => {

    return new Promise( (resolve, reject) => {

        const paylod = {
            uid,
            name
        }

        jwt.sign(paylod, process.env.SECRET_JWT,{
            expiresIn : '2h'
        }, (error,token) => {
            if(error){
                console.log(error);
                return reject('No se pudo generar el token');
            }
            return resolve(token)
        }
        )

    })
}

module.exports = JWTGenerator;