import { Container, Box, Typography, TextField, Button } from "@mui/material"
import casa from '../../midia/casa-de-saberes.jpg'
import volta from "../../midia/volta2.png"
import { Link } from "react-router-dom"

import { useContext } from "react"
import { useState } from "react";
import { useEffect } from "react";
import {AdminContext,AdminProvider} from "../Login_Contexto/ContextoLogin";


import axios from "axios"


const Signin = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const[usuarios,SetUsuarios] = useState ([])

    const { isAdmin, setIsAdmin } = useContext(AdminContext);
    const { Usuario, SetUsuario } = useContext(AdminContext);
 
    
    useEffect(
        () => {
            axios.get("http://localhost:3001/usuarios/listar")
                .then(
                    (response) => {
                        SetUsuarios(response.data)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )

    

    const pegarEmail = (event) => {
        setEmail(event.target.value);
    };

    const pegarSenha = (event) => {
        setSenha(event.target.value);
    };


    
    const verificacao = () => {
        
        if (usuarios.find(adm => adm.email == email && adm.senha == senha)) {
            SetUsuario(usuarios.find(adm => adm.email == email && adm.senha == senha))
            if (usuarios.find(adm => adm.email == email && adm.tipo == 'adm')) {
                setIsAdmin(true)
                console.log(isAdmin)
            }
        }
        
    }
 


    return (
        <>
            <div className="login">
                <div className="conteudo">
                    <div className="titulo">
                        <Link to={'/'}> <img src={volta} alt="" /> </Link>
                        <h1>Login</h1>
                    </div>

                    <Container maxWidth="md" className="margem">
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                // alignItems: "center",
                                mt: 10
                            }}
                        >
                            <TextField
                                required
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Endereço de e-mail"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                sx={{}}
                                onChange={pegarEmail}
                            />
                            <TextField
                                required
                                margin="normal"
                                fullWidth
                                name="senha"
                                label="Senha"
                                type="password"
                                id="senha"
                                onChange={pegarSenha}
                            />
                            { }
                            <Link to={'/'}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mb: 2, color: "white" }}
                                    onClick={verificacao}
                                    className="botao-envio"
                                >
                                    Sign In
                                </Button>
                            </Link>


                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}
                                width="100%"
                            >

                                <Link
                                    href="#"
                                    underline="none"
                                    className="link"
                                    fontSize={"15px"}
                                    to={"/cadastro"}
                                >
                                    Não tem conta? Cadastre-se.
                                </Link>
                            </Box>
                        </Box>
                    </Container>
                </div>

                <div className="image">
                    <img src={casa} alt="" />
                </div>

            </div>

        </>
    )

}

export default Signin