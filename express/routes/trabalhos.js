var express = require('express');
var router = express.Router();
var trabalhoService = require ("../services/trabalho.services.mongo")
const multer = require('multer');
const upload = multer(); // Configuração básica do Multer para lidar com formulários sem arquivos

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get(
//   "/listar"
//   ,
//   (req, res, next) => {
//       res.json(trabalhoService.list())
//   }
// )

router.get(
  "/listar"
  ,
  (request, response, next) => {
    trabalhoService.list(request,response)
  }
)

// router.post(
//   "/adicionar"
//   ,
//   (req, res, next) => {
//     const trabalho = trabalhoService.register(req.body)
//     res.json(trabalho)
//   }
// )


router.post(
  "/adicionar"
  ,
  (request, response, next) => {
    trabalhoService.register(request,response)
  }
)


// router.post("/adicionar", upload.fields([
//   { name: 'pdf1', maxCount: 1 },
//   { name: 'pdf2', maxCount: 1 }
// ]), (request, response, next) => {
//   const { body, files } = request;
  
//   // Passar os dados do formulário e os arquivos para a função de registro
//   trabalhoService.register(body, files)
//     .then(() => {
//       // Sucesso no registro
//       response.status(200).json({ message: 'Publicação registrada com sucesso!' });
//     })
//     .catch((error) => {
//       // Tratar erros
//       console.error('Erro ao registrar a publicação:', error);
//       response.status(500).json({ error: 'Erro interno do servidor' });
//     });
// });




// router.delete("/delete/:id"
//     ,
//     function (req, res, next) {
//         const ok = trabalhoService.delete(req.params.id);
//         if (ok) return res.json({ "sucess": true });
//         else return res.json({ "sucess": false });
//     }
// )

router.delete("/delete/:id"
    ,
    function (request, response, next) {
      trabalhoService.delete(request,response)
    }
)

module.exports = router ;
