const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Question } = require('../models/question');
var {Answer} =require('.././models/answekey');
var _= require('lodash');



// => localhost:3000/users
// ----------------------get all data-----------------------
    router.get('/', (req, res) => {
        var answekey;
        var questiolist;
        Answer.find((err, docs) => {
            if (!err) { 
                answekey=docs; }
        });

        Question.find((err, docs) => {
            if (!err) {
                questiolist=docs;
                 res.send({answer:answekey,qiestionlist:questiolist}); 
                
            
        }
            else 
            { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
        });

        
    });
    
// --------------------get data with id -------------------------
router.get('/:QuestionNO', (req, res) => {
    var QuestionNO =req.params.QuestionNO;
    var answer =req.params.answer
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
   // console.log("in post user backend: ",req.body);

   var QuestionNO =req.body.QuestionNO;


    Question.find({QuestionNO:QuestionNO }, function(err, result) 
    {  
    
        //console.log(result);

        if(_.isEmpty(result))
        {
            console.log("add question"+QuestionNO);
            var emp = new Question({

                Question: req.body.Question,
                QuestionNO: req.body.QuestionNO,
                option1: req.body.option1,
                option2: req.body.option2,
                option3: req.body.option3,
                option4: req.body.option4
            });

            emp.save((err, doc) => {
                if (!err) { 
                    var coorectAnswer =new Answer(
                    {
                        QuestioNO:req.body.QuestionNO,
                        answer :req.body.Answer
                    });
                    coorectAnswer.save((err,result)=>
                    { });
                    
                    res.send(doc); 
                } else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
            });
        
        }   
        else
        {
            
            console.log("QuestioNO is avaliable");
            console.log(result[0]['_id']);
            
            
            Question.findOneAndUpdate({_id:result[0]['_id'] }, {$set: {Question: req.body.Question,
                QuestionNO: req.body.QuestionNO,
                option1: req.body.option1,
                option2: req.body.option2,
                option3: req.body.option3,
                option4: req.body.option4}}, {new: true}, (err, doc) => {
                if (err) {
                    console.log("Something wrong when updating data!");
                }
                console.log(req.body.QuestionNO);
                Answer.updateOne({QuestioNO:req.body.QuestionNO},{$set:{
                    QuestionNO: req.body.QuestionNO,
                    answer:req.body.Answer}},{new:true},(err,doc)=>
                {
                    if(!err)

                    {
                        console.log("update answerkey");
                    }

                });
                console.log("update sucessfully");
            });
            
        }
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

    Answer.remove({QuestioNO:QuestionNOs},(err,res)=>
    {
        console.log("answer is deleted");
    })
    console.log(QuestionNOs);

    Question.findOneAndDelete({QuestionNO:QuestionNOs}, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;