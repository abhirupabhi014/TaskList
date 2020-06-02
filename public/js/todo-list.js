$(document).ready(function(){

  
  $('form').on('submit', function(e){
      console.log("ajax called ");

      var item = $('form input');
      if(item.val().length > 0){
        var todo = {item: item.val()};
        $('form input').val("");
        $.ajax({
          type: 'POST',
          url: '/',
          data: todo,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();

          },
          error : function(xhr,exception){
            console.log(xhr.status);
            console.log(xhr.responseText);
            console.log(exception);
          }

        });
      }
      

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      console.log("ajax DELETE called ");
      $.ajax({
        type: 'DELETE',
        url: '/' + item,
        success: function(tasks){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
