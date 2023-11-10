const { Router } = require('express');
const usersRoute = Router();
const controller = require('../controllers/userController');

usersRoute.post('/signup',controller.signup_post);
usersRoute.post('/login',controller.login_post);
usersRoute.get('/logout',controller.logout_get);
usersRoute.get('/isLoggedIn',controller.isloggedIn_get);

module.exports = usersRoute;