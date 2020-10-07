const passport = require('passport');

// we create a route handler for /auth/google. when someone makes a get request at that route
// we are telling express to involve passport. send the user to the authentication flow
module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email'],
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout();
    });

    // function automatically called when someone make a get request to the route
    // '/api/current_user'
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
