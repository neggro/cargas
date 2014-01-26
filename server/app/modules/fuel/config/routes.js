var controller = require('../controller'),
    authorization = require('../../../middlewares/authorization');

module.exports = function (app) {
    app.get('/api/fuel', authorization.requiresLogin, controller.list);
    app.post('/api/fuel', authorization.requiresLogin, controller.create);
    app.get('/api/fuel/:id', authorization.requiresLogin, controller.get);
    app.delete('/api/fuel/:id', authorization.requiresLogin, controller.delete);

    /*
    app.get('/fuels', function (request, response) {

        var mongoose = require('mongoose'),
            Fuel = mongoose.model('Fuel');

        new Fuel({
            name: 'Premium 97 SP',
            cost: 42.10
        }).save();

        new Fuel({
            name: 'Gasoil',
            cost: 38.70
        }).save();

        new Fuel({
            name: 'Super 95 SP',
            cost: 40.60
        }).save();

        response.send('Combustibles actualizados');
    });
    */
};