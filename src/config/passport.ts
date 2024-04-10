import passport from 'passport';
import LocalStrategy from '@middleware/local.strategy.auth';
import JwtStrategy from '@middleware/jwt.strategy.auth';

export const passportLocal = () => passport.use(LocalStrategy);
export const passportJwt = () => passport.use(JwtStrategy);
