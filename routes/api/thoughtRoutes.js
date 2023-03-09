const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getOneThought,
    updateThought,
    deleteThought
  } = require('../../controllers/thoughtControllers');

  // /api/thoughts
  router.route('/').get(getThoughts).post(createThought);

  router.route('/:thoughtId').post(getOneThought).put(updateThought).delete(deleteThought);

module.exports = router;