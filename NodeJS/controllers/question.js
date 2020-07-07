const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Question } = require('../models/question');



// => localhost:3000/users
// ----------------------get all data-----------------------
    router.get('/', (req, res) => {
        
        Question.find((err, docs) => {
            if (!err) { res.send(docs); }
            else 
            { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
        });
    });
// --------------------get data with id -------------------------
router.get('/:QuestionNO', (req, res) => {
    var QuestionNO =req.params.QuestionNO;
    Question.find({QuestionNO:QuestionNO }, function(err, result) 
    {   
        //console.log("get data of user"+result);
        
        if(result !== null)
        {
            
            res.send(result);
        }
        else
        {   
            //res.setHeader('Content-Type', 'text/plain');
            res.send([]);
        }
    });

});



// -------------------------insert data -------------------

router.post('/', (req, res) => {
    console.log("in post user backend: ",req.body);
//    answekey[req.body.QuestionNO]=req.body.Answer
    var emp = new Question({

        Question: req.body.Question,
        QuestionNO: req.body.QuestionNO,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4
    });
    emp.save((err, doc) => {
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

router.delete('/:QuestionNO', (req, res) => {
    var QuestionNOs =req.params.QuestionNO;
    console.log(QuestionNOs);

    Question.findOneAndDelete({QuestionNO:QuestionNOs}, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;