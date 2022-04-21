var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/', express.static('static'))

const hostname = '0.0.0.0';
const port = 3000;

app.get('/', function (req, res) {
   res.send('Hello World');
})


app.post('/login', function(req, res){
    var result1 = {
      status: 0,
      msg: 'login succeeded'
    }
    var result2 = {
      status: 1,
      msg: 'login failed'
    }

    console.log( req.body.username );

    if ((req.body.username === 'admin' ) & ( req.body.password === 'checkmate')) {
      console.log('login succeeded');
      var result = result1;
      res.status(200);
      res.send(result1);
    } else {
      console.log('login failed');
      res.status(403);
      res.send(result2);
    }
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("app is listening at http://%s:%s", host, port)
})

