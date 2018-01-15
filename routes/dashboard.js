/*jshint esversion: 6 */
module.exports = function(app,dbcrud)
{

  app.get('/', (req, res) => res.json({message: "Seja bem-vindo ao WS Conpass!"}));

  app.get('/dashboard/v001/usersrubs', (req, res) => {
    dbcrud.userrubs(function(err,done){
      if (done) res.status(200).send(done);
      else {
          res.send({'err': 'informação não encontrada.'});
      }
    });
  });

  app.get('/dashboard/v001/usersflowend', (req, res) => {
    dbcrud.usersflowend(function(err,done){
      if (done) res.json(done);
      else {
          res.send({'err': 'informação não encontrada.'});
      }
    });
  });

  app.get('/dashboard/v001/flowsstart', (req, res) => {
    dbcrud.flowsstart(function(err,done){
      if (done) res.status(200).send(done);
      else {
          res.send({'err': 'informação não encontrada.'});
      }
    });
  });

  app.get('/dashboard/v001/flowsend', (req, res) => {
    dbcrud.flowsend(function(err,done){
      if (done) res.status(200).send(done);
      else {
          res.send({'err': 'informação não encontrada.'});
      }
    });
  });

};
