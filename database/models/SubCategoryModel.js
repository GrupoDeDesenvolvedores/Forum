module.exports = (sequelize, type) => {
    return sequelize.define('sub_categories', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: type.INTEGER,
        name: type.STRING,
        description: type.STRING,
        icon: type.STRING,
        posts: type.INTEGER
    });
};