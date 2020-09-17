const AuthLoginController = require("../controllers/AuthLoginController");

module.exports = app => {
     app.post('/auth', AuthLoginController.authentication);
}

