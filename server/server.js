import app from './server-config';

var port = 3000;

app.listen(port, () => {
  console.log('Server now listening on port ' + port);
});


//export default server;