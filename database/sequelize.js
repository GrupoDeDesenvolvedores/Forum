const Sequelize = require('sequelize');

const UserModel = require('./models/UserModel');
const CategoryModel = require('./models/CategoryModel');
const PostModel = require('./models/PostModel');

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',

    pool: {
        max: process.env.MYSQL_CONNECTION_LIMIT,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    operatorsAliases: false
});

const User = UserModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);

sequelize.sync().then(() => {
    console.log('Tables created successfully.');
});

module.exports = {
    User,
    Category,
    Post
};