var tasks = [{"item":"Buy Milk"},{"item":"Do Nothing"},{"item":"Form Good Habits"}];

module.exports = function(app,urlencodedParser){

  app.get('/',function(req,res){
    res.render('taskList',{"tasks" : tasks});
  });

  app.post('/',urlencodedParser,function(req,res){
    console.log('Request1 : ', req.body);
    tasks.push(req.body);
    res.render('taskList',{"tasks" : tasks});
    //res.json(tasks);
  });


  app.delete('/:item',function(req,res){
    console.log('req.params.item' + req.params.item);
    tasks = tasks.filter(function(itemObj){
      return itemObj.item.replace(/ /g, "-") !== req.params.item;
    });
    //res.json(tasks);
    res.render('taskList',{"tasks" : tasks});
  });
}
