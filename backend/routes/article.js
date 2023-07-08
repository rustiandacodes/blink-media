const express = require('express');
const router = express.Router();
const { createArticle, getAllArticle, deleteArticle, updateArticle } = require('../controllers/ArticlesController');

//Post a new workout
router.post('/', createArticle);
router.get('/', getAllArticle);
router.delete('/:id', deleteArticle);
router.patch('/:id', updateArticle);

module.exports = router;
