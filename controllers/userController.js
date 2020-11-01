const db = require("../models");

module.exports = {    
    userId: "",
    create: function(req, res) {
        db.Users
        .create(req.body)
        .then(dbUsers => {
        res.json(dbUsers._id); 
        module.exports.userId = dbUsers._id;               
        })
        .catch(err => console.log(err));
    },

    findOneAndVerify: function(req, res) {
        db.Users
        .findOne({ email: req.body.email}, function (err, user) {
            
            // test a matching password
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (err) throw err;
                else if (isMatch && isMatch === true) {
                    res.json(user._id);
                    module.exports.userId = user._id
                } else {
                    return res.status(401).send();                        
                }                    
            });              
        })           
        .catch(err => res.json(err));        
    },
   

    
}