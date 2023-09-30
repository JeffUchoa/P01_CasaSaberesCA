var express = require('express');
var router = express.Router();
var eventosService = require ("../services/eventos.services.mongo")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//DATA BASE DO EXPRESS
// router.get(
//   "/listar"
//   ,
//   (req, res, next) => {
//       res.json(eventosService.list())
//   }
// )


router.get(
  "/listar"
  ,
  (request, response, next) => {
    eventosService.list(request,response)
  }
)

//DATA BASE DO EXPRESS
// router.post(
//   "/adicionar"
//   ,
//   (req, res, next) => {
//     const trabalho = eventosService.register(req.body)
//     res.json(trabalho)
//   }
// )

router.post(
  "/adicionar"
  ,
  (request, response, next) => {
    eventosService.register(request,response)
  }
)

//DATA BASE DO EXPRESS
// router.delete("/delete/:id"
//     ,
//     function (req, res, next) {
//         const ok = eventosService.delete(req.params.id);
//         if (ok) return res.json({ "sucess": true });
//         else return res.json({ "sucess": false });
//     }
// )

router.delete("/delete/:id"
    ,
    function (request, response, next) {
      eventosService.delete(request,response)
    }
)

module.exports = router ;
