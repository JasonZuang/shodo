var data = [{item: 'fuck'},{item:'suck'},{item:'shit out of luck'}];
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
module.exports = function(app){

    app.get('/shodo',function(req,res){
        res.render('todo',{todos: data});
    });
    app.post('/shodo', urlencodedParser, function(req,res){
        data.push(req.body);
        res.json(data);
    });
    app.delete('/shodo/:item', function(req,res){
          data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
          });
          res.json(data);
    });
};