var express = require('express');
var router = express.Router();
var NoticiasService = require ("../services/noticias.services.mongo")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(
  "/listar"
  ,
  (request, response, next) => {
    NoticiasService.list(request,response)
  }
)


router.post(
  "/adicionar"
  ,
  (request, response, next) => {
    NoticiasService.register(request,response)
  }
)

router.delete("/delete/:id"
    ,
    function (request, response, next) {
      NoticiasService.delete(request,response)
    }
)

module.exports = router ;