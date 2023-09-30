var express = require('express');
var router = express.Router();
var eventosService = require ("../services/acessos.services.mongo")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get(
  "/listar"
  ,
  (request, response, next) => {
    eventosService.list(request,response)
  }
)

router.put(
  "/update/:id"
  ,
  (request, response, next) => {
      eventosService.update(request,response)
  }
)

module.exports = router ;
