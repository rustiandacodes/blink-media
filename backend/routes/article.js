const express = require('express');
const router = express.Router();
const { createArticle, getAllArticle, getArticle, deleteArticle, updateArticle } = require('../controllers/ArticlesController');

//Post a new workout
router.post('/', createArticle);
router.get('/', getAllArticle);
router.get('/:id', getArticle);
router.delete('/:id', deleteArticle);
router.patch('/:id', updateArticle);

module.exports = router;
