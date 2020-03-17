const JwtStrategy = require("assport-jwt").Strategy;
const ExtractJwt = require('ssport-jwt').ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("./keys");

const options = {};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    console.log(jwt_payload);
    done();
  }))
}
