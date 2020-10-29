const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const config = require('../../config')[process.env.NODE_ENV || 'development'];
const { CREATE_USER, READ_USER } = require('../../models/query');
const db = require('../../models/connection');

module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user);
  });

  const githubCallback = async (accessToken, refreshToken, profile, done) => {
    let user = await db(READ_USER, [profile.username]);
    if(!user) {
      await db(CREATE_USER, [true, profile.username, null]);
      user = await db(READ_USER, [profile.username]);
    }
    return done(null, user[0]);
  };

  passport.use(new GitHubStrategy({
    clientID: config.githubOauthClientID,
    clientSecret: config.githubOauthSecret,
    callbackURL: config.githubOauthCallback,
  },
  githubCallback,
  ));
}
