module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        tag: type.ENUM('fundador(a)', 'administrador(a)', 'moderador(a)', 'professor(a)', 'desenvolvedor(a)', 'membro'),
        icon: type.STRING,
        reputation: type.INTEGER,
        ban: type.BOOLEAN
    });
};