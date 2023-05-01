import passport from 'passport';
import passportJwt from 'passport-jwt';
import { Usuario } from '../models/Usuario.js';

const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRETO,
};

passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
    console.log(opts)
    try {
        const usuario = await Usuario.findOne({ where: { id: jwtPayload.id } });
        if (!usuario) {
            return done(null, false);
        }
        return done(null, usuario);
    } catch (error) {
        return done(error, false);
    }
}));

export default passport;