const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category'    
}],
    createdAt: { type: Date, default: Date.new },
    updatedAt: { type: Date, default: Date.now },
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;