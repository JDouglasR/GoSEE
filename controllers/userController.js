const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Users
        .create(req.body)
        .then(dbUsers => {
        res.json(dbUsers);            
        })
        .catch(err => console.log(err));
    },

    findOne: function(req, res) {
        db.Users
        .findOne({ email: req.body.email}, function (err, user) {
            
            // test a matching password
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (err) throw err;
                else if (isMatch && isMatch === true) {
                    res.json(user._id)
                } else {
                    return res.status(401).send();                        
                }                    
            });              
        })           
        .catch(err => res.json(err));        
    }

    
}