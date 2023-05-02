import passport from 'passport';
import passportJwt from 'passport-jwt';
import { Usuario } from '../models/Usuario.js';

const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;

// Se configura el objeto opts con la clave secreta y la forma de extraer el token
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRETO,
};

// Se define la estrategia de autenticación basada en JWT
passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
    try {
        // Se busca el usuario en la base de datos a través del id que viene en el token
        const usuario = await Usuario.findOne({ where: { id: jwtPayload.id } });
        // Si no se encuentra el usuario se devuelve un error
        if (!usuario) {
            return done(null, false);
        }
        // Si se encuentra el usuario se devuelve el objeto usuario en el callback de done
        return done(null, usuario);
    } catch (error) {
        // Si ocurre un error en la búsqueda del usuario se devuelve el error en el callback de done
        return done(error, false);
    }
}));

export default passport;