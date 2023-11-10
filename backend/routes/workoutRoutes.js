const { Router } = require('express');
const workoutRoute = Router();
const controller = require('../controllers/workoutController');
const auth = require('../middleware/auth');

workoutRoute.use(auth);

workoutRoute.get('/', controller.all_get);
workoutRoute.get('/:id', controller.single_get);
workoutRoute.post('/', controller.single_post);
workoutRoute.delete('/:id', controller.single_delete);
workoutRoute.patch('/:id', controller.single_patch);

module.exports = workoutRoute;
