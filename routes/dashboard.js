/*jshint esversion: 6 */
module.exports = function(app,dbcrud)
{

  app.get('/', (req, res) => res.json({message: "Seja bem-vindo ao WS Conpass!"}));

  app.get('/dashboard/v001/userstop/', (req, res) => {
    // Onde os usuários estão parando?

  });

  app.get('/dashboard/v001/userflowend/', (req, res) => {
    // Quais os flows que cada usuário fez?

  });

  app.get('/dashboard/v001/featurewithflow/', (req, res) => {
    // Qual a feature possui mais flow iniciado e finalizado?

  });



};
