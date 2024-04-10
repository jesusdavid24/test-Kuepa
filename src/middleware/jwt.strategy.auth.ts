import { Strategy, ExtractJwt, type StrategyOptions } from 'passport-jwt';

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET!
};

const JwtStrategy = new Strategy(options, (payload, done) => {
  done(null, payload);
});

export default JwtStrategy;
