const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth')

const{getAllScreams, postOneScream} = require('./handlers/screams');
const{signup,login} = require('./handlers/users');

//scream rountes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream );
//sigup route
app.post('/signup', signup);
//login route
app.post('/login', login);



exports.api = functions.https.onRequest(app);