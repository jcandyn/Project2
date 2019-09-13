var db = require("../models/app");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/api/events", function (req, res) {
        var query = {};

        if (req.query.user_id) {
            req.query.UserId = req.query.user_id;
        };

        db.Event.findAll({
            where: query,
            include: [db.User]
        }).then(function (dbEvent) {
            res.json(dbEvent);
        });
    });

    app.get("/api/events/:username", function(req, res) {
        db.Event.findAll({
            where: {
                username: req.params.username
            },
            include: [db.User]
        }).then(function(dbEvent){
            res.json(dbEvent);
        });
    });

    app.get("/api/events/:category", function(req, res){
        db.Event.findAll({
            where: {
                category: req.params.category
            }
        }).then(function(dbEvent){
            res.json(dbEvent);
        });
    });

    app.post("/api/events", function(req, res){
        db.Event.create(req.body).then(function(dbEvent){
            res.json(dbEvent);
        });
    });

    app.delete("/api/events/:id", function(req, res){
        db.Event.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbEvent){
            res.json(dbEvent);
        });
    });

    app.put("/api/events", function(req, res){
        db.Event.update(
            req.body,
            {
                where: {
                id: req.body.id
            }
        }).then(function(dbEvent){
            res.json(dbEvent);
        });
    });

}