const { User, Category, Post } = require('../../database/sequelize');

const api = {};

api.home = async (req, res) => {
    let statistics = {
        users: 0,
        posts: 0
    };

    let categories = [];

    let posts = [];

    await User.count().then(response => statistics.users = response);
    await Post.count().then(response => statistics.posts = response);

    await Category.findAll().then(response => categories = response);

    await Post.findAll().then(response => posts = response);

    res.render('index', { statistics: statistics, categories: categories, posts: posts });
}

module.exports = api;