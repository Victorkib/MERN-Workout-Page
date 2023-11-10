const mongoose = require('mongoose');
const Workout = require('../models/workoutModel');

//all get
module.exports.all_get = async (req, res) => {
  const user_id = req.user._id;
  const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
  if (!workouts) {
    return res.status(400).json({ error: 'No workouts to display!' });
  }
  res.status(200).json(workouts);
};

//single get
module.exports.single_get = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'That is not a valid Id' });
  }
  try {
    const workout = await Workout.findById(id);
    if (!workout) {
      throw new Error('No such Workout');
    }
    res.status(200).json(workout);
  } catch (err) {
    res.status(500).json({ msg: 'Internal Server Error!', error: err.message });
  }
};
//single post
module.exports.single_post = async (req, res) => {
  const user_id = req.user._id;
  console.log(user_id);
  const { title, reps, load } = req.body;
  if (!title || !reps || !load) {
    return res.status(400).json({ error: 'All fields Must be Filled!' });
  }
  try {
    const workout = await Workout.create({ title, reps, load, user_id });
    if (!workout) {
      throw new Error('Error While creating Workout');
    }
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//single delete
module.exports.single_delete = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'That is not a valid Id' });
  }
  try {
    const workout = await Workout.findByIdAndDelete(id);
    if (!workout) {
      throw new Error('No such Workout to delete ');
    }
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//single update
module.exports.single_patch = async (req, res) => {
  const { id } = req.params;
  const { title, reps, load } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'That is not a valid Id' });
  }
  try {
    const workout = await Workout.findByIdAndUpdate(
      id,
      {
        title,
        reps,
        load,
      },
      { new: true }
    );
    if (!workout) {
      throw new Error('No such Workout to Update ');
    }
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
