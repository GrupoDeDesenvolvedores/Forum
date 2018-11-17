module.exports = (sequelize, type) => {
    return sequelize.define('post', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: type.INTEGER,
        author: type.INTEGER,
        title: type.STRING,
        message: type.STRING,
        likes: type.INTEGER,
        deslikes: type.INTEGER
    });
};