var app = require('./config/server')

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app)

var rotaHome = require('./app/routes/home')
rotaHome(app)

var rotaFormInclusaoNoticia = require('./app/routes/formulario_inscricao_noticia')

app.listen(3000, function (){
  console.log('Server ON')
})