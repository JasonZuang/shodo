$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');
        var todo = {item: item.val()};
        console.log("asd");
        $.ajax({
          type: 'POST',
          url: '/shodo',
          data: todo,
          success: function(data){
            //do something with the data via front-end framework
            console.log("Success");
            location.reload();
          }
        });
  
        return false;
  
    });
  
    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
          type: 'DELETE',
          url: '/shodo/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
  
  });