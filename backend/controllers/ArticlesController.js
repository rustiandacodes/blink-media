const Article = require('../models/ArticleModels');
const mongoose = require('mongoose');

const getAllArticle = async (req, res) => {
  const article = await Article.find({}).sort({ createdAt: -1 });
  res.status(200).json(article);
};

const createArticle = async (req, res) => {
  const { title, body } = req.body;
  let emptyFields = [];
  if (!title) {
    emptyFields.push('title');
  }
  if (!body) {
    emptyFields.push('body');
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
  }
  try {
    const article = await Article.create({ title, body });
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateArticle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such a article' });
  }

  const article = await Article.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!article) {
    return res.status(404).json({ error: 'No such a article' });
  }
  res.status(200).json(article);
};

const deleteArticle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such a article' });
  }

  const article = await Article.findByIdAndDelete(id);

  if (!article) {
    return res.status(404).json({ error: 'No such a article' });
  }
  res.status(200).json(article);
};

module.exports = {
  createArticle,
  getAllArticle,
  deleteArticle,
  updateArticle,
};