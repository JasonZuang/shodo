var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shodo:shodo@shodo.hxmku.mongodb.net/shodo?retryWrites=true&w=majority')
//creating schema
var shodoSchema = new mongoose.Schema({
    item:String
});

var Todo = mongoose.model('Shodo',shodoSchema);
var itemOne = Todo({item:'Fuck the Police'}).save(function(error){
    if(error) throw error;
    console.log("item saved");
});

var data = [{item: 'fuck'},{item:'suck'},{item:'shit out of luck'}];
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
module.exports = function(app){

    app.get('/shodo',function(req,res){
        //load mdb app and pass 
        Todo.find({},function(err,data){
            if(err){ throw err;}
            res.render('todo',{todos: data});
        });
        
    });
    app.post('/shodo', urlencodedParser, function(req,res){
        //get data and load to Todo model
        var newTodo = Todo(req.body).save(function(err){
            if(err) throw err;
            res.json(data);
        });

    });
    app.delete('/shodo/:item', function(req,res){
        Todo.find({item: req.params.item.replace(/\-/g," ")}).deleteOne(function(err,data){
            if(err) throw err;
            res.json(data)
        });
          
    });
};