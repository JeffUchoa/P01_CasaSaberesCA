import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { useParams } from 'react-router-dom';


import { Worker, Viewer} from '@react-pdf-viewer/core';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"


const Trabalho = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { linkPdf, titulo, descricao } = useParams();

  const [pdfData, setPdfData] = useState(null);
  const [viewData, setViewData] = useState(null);

  const newplugin = defaultLayoutPlugin()

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await fetch(`http://localhost:3001/pdf/${linkPdf}`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfData(url);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao obter o PDF:', error);
      }
    };

    fetchPdf();
  }, [linkPdf]);

  if (isLoading) {
    return <div>Carregando Publicação...</div>;
  }
  

  return (
    <>
    <div className="header-pesquisas2">
        <div className="cabecalho" >
          <h1 className="titulo"> {titulo}</h1>
          <p className="subtitulo">{descricao}</p>
        </div>
    
      <div
      style={{ width:"70%", marginTop:"5%", marginBottom:"5%"
      
        
      }}
    >
      <h4 style={{display:"flex",justifyContent:"center"}}>O trabalho será disponibilizado em formato PDF abaixo!</h4>
      <div style={{border: '1px solid rgba(0, 0, 0, 0.3)',display:"flex",justifyContent:"center"}}>
        
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" className="trabalhore" >
          
          <Viewer fileUrl= {pdfData} plugins={[newplugin]}  />
        </Worker>
      </div>
      
    </div>
    
      </div>

    
    </>
    
    
  );
};

export default Trabalho;