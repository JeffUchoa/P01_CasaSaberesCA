
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import PdfIcon from '../../midia/pdf-icon.png';
import lixo from "../../midia/lixo.png";
import pesquisa from "../../midia/pesquisa.png";

import { useContext } from "react"
import { AdminContext, AdminProvider } from "../Login_Contexto/ContextoLogin";
import { Link } from 'react-router-dom';

import { publicacoes2 } from '../CriarPublicacao/publicacoes';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Excluir from '../excluir/Excluir';
import Swal from 'sweetalert2';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';





function PaginaPublicacao() {

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [publicacoesPerPage] = useState(4);

  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  // const [publicacoes, setPublicacoes] = useState([


  //   { id: 11, titulo: 'Artigo Casa Saberes' },
  //   { id: 12, titulo: 'Publicação 10' }

  // ])


  const [publicacoes, setTrabalhos] = useState([])
  const [mudou, setMudou] = useState(false)
  const navigate = useNavigate()

  useEffect(
    () => {
      axios.get("http://localhost:3001/trabalhos/listar")
        .then(
          (response) => {
            console.log(mudou)
            setTrabalhos(response.data)
          }
        )
        .catch(error => console.log(error))
    }
    ,
    []
  )
  useEffect(
    () => {
      axios.get("http://localhost:3001/trabalhos/listar")
        .then(
          (response) => {
            console.log(mudou)
            setTrabalhos(response.data)
          }
        )
        .catch(error => console.log(error))
    }
    ,
    [mudou]
  )

  function deleteTrabalho(id) {
    
      axios.delete(`http://localhost:3001/trabalhos/delete/${id}`)
        .then(
          (response) => {
            deleteTeste(id)
            setMudou(!mudou)
          }
        )
        .catch(error => console.log(error))
    
  }

  function deleteTeste(id) {
    for (let i = 0; i < publicacoes.length; i++) {
      if (publicacoes[i].id == id) {
        publicacoes.splice(i, 1);
        return true;
      }
    }
    return false
  }

  



  // setPublicacoes(publicacoes2)

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredPublicacoes = publicacoes.filter((publicacao) =>
    publicacao.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasResults = filteredPublicacoes.length > 0;
  const showNoResults = searchQuery.length > 0 && !hasResults;

  const indexOfLastPublicacao = currentPage * publicacoesPerPage;
  const indexOfFirstPublicacao = indexOfLastPublicacao - publicacoesPerPage;
  const currentPublicacoes = filteredPublicacoes.slice(indexOfFirstPublicacao, indexOfLastPublicacao);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPublicacoes.length / publicacoesPerPage); i++) {
    pageNumbers.push(i);
  }
  


const Excluir = (id) => {
    Swal.fire({
      title: 'Você tem certeza que deseja deletar?',
      text: "O processo não será revertido após a confirmação",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Deletar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTrabalho(id)
        console.log(id)
        Swal.fire(
          'Deletado!',
          'O item foi excluido',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'O item foi salvo',
          'error'
        );
      }
    });
};





  // const buscarImagem = (nomeArquivo) => {
  //   return new Promise((resolve, reject) => {
  //     const url = `http://localhost:3001/imagem/${nomeArquivo}`;
  //     const img = new Image();
  //     img.onload = () => resolve(url);
  //     img.onerror = () => reject(new Error(`Erro ao buscar a imagem ${nomeArquivo}`));
  //     img.src = url;
  //     setImagem(img.src)
  //   });
  // };

  // useEffect(
  //   () => {
  //     buscarImagem("pdf-1688693643489.png")
  //   }
  //   ,
  //   []
  // )

  return (
    <>
     <div className="header-pesquisas">
        <div className="cabecalho">
          <h1 className="titulo"> Publicações</h1>
          <p className="subtitulo">Trabalhos oficiais feitos pela Casa de Saberes!</p>
        </div>
        
      </div>
    
    
    <div className='todaspublicacoes'>
     
      

      <div className="search-container">
      <img src={pesquisa} alt="Lupa de pesquisa ilustrada" className='lupar' /> 
        <TextField
          
          label="Pesquisar"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          fullWidth
          className="search-input"
        > </TextField>
        
        <Link to={'/novaPublicacao'}>
          <div className={isAdmin === true ? 'botao-postar active' : 'botao-postar '}><h1>+</h1> Nova Publicação</div>
        </Link>

      </div>

        <div className={`publicacoes-container ${showNoResults ? "no-results-message" : ""}`}>
          {currentPublicacoes.map((publicacao) => {
            let imagem = ''
           
            
            
            const buscarImagem = (nomeArquivo) => {
              return new Promise((resolve, reject) => {
                const url = `http://localhost:3001/imagem/${nomeArquivo}`;
                const img = new Image();
                img.onload = () => resolve(url);
                img.onerror = () => reject(new Error(`Erro ao buscar a imagem ${nomeArquivo}`));
                img.src = url;
                imagem =img.src
              });
            };

            

           

            if(publicacao.linkImage && publicacao.linkPdf){
              buscarImagem(publicacao.linkImage)
              
              
            }

            return (
              <>
                {isAdmin ? (
                  <div className='foi'>
                    <Link to={`/trabalho/${publicacao.linkPdf}/${publicacao.titulo}/${publicacao.descricao}`}>
                    <Card sx={{ maxWidth: "100%", mb: "3%",backgroundColor:"#EAE8DB",color:"#a12d2e" }}>
                    <CardActionArea sx={{ display: "flex", flexDirection: "row" }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={imagem}
                        alt="Imagem Publicação"
                      />
                      <CardContent sx={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", width: "90%" }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", justifyContent: "flex-start" }}>
                          {publicacao.titulo}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ display: "flex", justifyContent: "flex-start",color:"#a12d2e"  }}>
                          {publicacao.descricao}
                        </Typography>
                      </CardContent>

                  
                    </CardActionArea>
                  </Card>
                  </Link>
                  <img src={lixo} onClick={() => Excluir(publicacao._id)} alt="ícone de lixeira para excluir trabalho selecionado" className='imagem-lixo-publicacao'/>
                  </div>
                  
                  
                ) : (
                  publicacao.publico === true ? (
                    <Link to={`/trabalho/${publicacao.linkPdf}/${publicacao.titulo}/${publicacao.descricao}`}>
                    <Card sx={{ maxWidth: "100%", mb: "3%",backgroundColor:"#EAE8DB",color:"#a12d2e" }}>
                    <CardActionArea sx={{ display: "flex", flexDirection: "row" }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={imagem}
                        alt="Imagem Publicação"
                      />
                      <CardContent sx={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", width: "90%" }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", justifyContent: "flex-start" }}>
                          {publicacao.titulo}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ display: "flex", justifyContent: "flex-start",color:"#a12d2e"  }}>
                          {publicacao.descricao}
                        </Typography>
                      </CardContent>
                  
                    </CardActionArea>
                  </Card>
                  </Link>
                    
                  ) : null
                )}
              </>
            );
          })}
          {showNoResults && (
            <div className="no-results-text">
              Nenhum resultado encontrado para a pesquisa: {searchQuery}
            </div>
          )}
        </div>

        <div className="pagination">
        {pageNumbers.map((number) => (
          <Button
            key={number}
            variant="contained"
            color={number === currentPage ? 'secondary' : 'default'}
            onClick={() => paginate(number)}
          >
            {number}
          </Button>
        ))}
      </div>
    </div>
    </>
  );
}

export default PaginaPublicacao