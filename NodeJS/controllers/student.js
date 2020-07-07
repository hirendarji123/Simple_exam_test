const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Studnet } = require('../models/student');

// ----------------------get all data-----------------------
router.get('/all',(req,res)=>
{
    Studnet.find((err, docs) => {
        if (!err)
         { 
        res.send(docs);
     }
    });
})
// --------------------get data with usernname-------------------------
router.get('/:username', (req, res) => {
    var username =req.params.username;
    console.log(username);
    Studnet.find({username:username }, function(err, result) 
    {   
        if(result !== null)
        {
            
            res.send(result);
        }
        else
        {   
         console.log("not found");
            res.send([]);
        }
    }); 

});



// -------------------------insert data -------------------

router.post('/', (req, res) => {
    console.log("in post user backend: ",req.body);
    var student = new Studnet({


        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
        
    });
    

    student.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


// -------------------------update data-----------------------------


router.put('/:Question', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    };
    User.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
// --------------------------delete data----------------

router.delete('/:username', (req, res) => {
    var username =req.params.username;
    console.log(username);

    Studnet.findOneAndDelete({username:username}, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;