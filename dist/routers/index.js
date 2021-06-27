const {
  Router
} = require('express');

const router = Router();

const {
  getUsers,
  createUsers,
  getUsersById,
  deleteById,
  updateById
} = require('../controllers/index.controller');

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
router.delete('/users/:id', deleteById);
router.put('/users/:id', updateById);
module.exports = router;