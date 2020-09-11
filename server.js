const fastify = require('fastify')();

fastify.get('/g', async (req, res) => {
    res.redirect('https://www.google.com/');
  });

fastify.get('/', async (req, res) => {
    res.send({
        "Invalid":"add /g in the url to get the result"
    })
});

fastify.listen(3000, function(err, address){
    if(err){
        console.log(err);
        process.exit(1);
    }else{
        console.log("Server is running...");
    }
});