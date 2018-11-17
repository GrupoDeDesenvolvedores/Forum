module.exports = (app) => {

    const api = app.api.home;

    app.route('/').get(api.home);

};