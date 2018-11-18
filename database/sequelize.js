const Sequelize = require('sequelize');

const UserModel = require('./models/UserModel');
const CategoryModel = require('./models/CategoryModel');
const SubCategoryModel = require('./models/SubCategoryModel');
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

    logging: false,
    operatorsAliases: false
});

const Category = CategoryModel(sequelize, Sequelize);
const SubCategory = SubCategoryModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: true }).then(() => {
    Category.create({
        id: 1,
        name: 'Java'
    });
    Category.create({
        id: 2,
        name: 'Minecraft'
    });
    SubCategory.create({
        category: 1,
        name: 'Software',
        description: 'Aqui você encontrará tudo relacionado a criação e manutenção de softwares.',
        icon: 'http://cdn.onlinewebfonts.com/svg/img_395988.png',
        posts: 0
    });
    SubCategory.create({
        category: 2,
        name: 'Servidores',
        description: 'Aqui você encontrará tudo relacionado a configurações de servidores.',
        icon: 'https://imagepng.org/wp-content/uploads/2017/08/minecraft-icone-icon.png',
        posts: 0
    });
    SubCategory.create({
        category: 2,
        name: 'Bukkit/Spigot/Bungee',
        description: 'Aqui você encontrará tudo relacionado ao desenvolvimento de plugins.',
        icon: 'https://wiki.minetest.net/images/c/cd/Lava_Bucket.png',
        posts: 0
    });
    console.log('Tables created/loaded successfully.');
});

module.exports = {
    User,
    Category,
    SubCategory,
    Post
};