import React, { useState, useEffect } from 'react'
import { Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material'
import './index.css'
import { useNavigate } from 'react-router-dom'

const FormCriarAnuncio = () => {
    const usuarioId = localStorage.getItem('usuarioId')
    const mudarRota = useNavigate()

    const [dadosAnuncio, setDadosAnuncio] = useState({
        nome: '',
        descricao: '',
        imagem: '',
        categoria: '',
        contato: '',
        usuario_id: usuarioId
    })

    const handleNome = (e) => {
        e.preventDefault()
        setDadosAnuncio({
            ...dadosAnuncio,
            nome: e.target.value
        })
    }

    const handleDescricao = (e) => {
        e.preventDefault()
        setDadosAnuncio({
            ...dadosAnuncio,
            descricao: e.target.value
        })
    }

    const handleImagem = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("upload_preset", "r2kismvj")
        console.log(formData)
        fetch("https://api.cloudinary.com/v1_1/dgkyahn55/image/upload", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            setDadosAnuncio({
                ...dadosAnuncio,
                imagem: data.url
            })
        })

    }

    const handleCategoria = (e) => {
        e.preventDefault()
        setDadosAnuncio({
            ...dadosAnuncio,
            categoria: e.target.value
        })
    }

    const handleContato = (e) => {
        e.preventDefault()
        setDadosAnuncio({
            ...dadosAnuncio,
            contato: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('https://dce-back.herokuapp.com/api/anuncio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAnuncio)
        });
        const data = await response.json();
        console.log(data);
        
        mudarRota("/anuncios");
    }

    return(
        <>
            <div className="criar-anuncio-body">
                <div className="criar-anuncio-body-content">
                    <div className="criar-anuncio-title">
                        CRIAR AN??NCIO ????
                    </div>
                    <div className="container-criar-anuncio">
                        <div className="criar-anuncio-img">
                            <img src={dadosAnuncio.imagem == "" ? "./img-anuncio.svg" : dadosAnuncio.imagem} alt=""/>
                            <Button
                            variant="contained"
                            component="label"
                            >
                                Selecionar Imagem
                                <input
                                    type="file"
                                    hidden
                                    required
                                    onChange={handleImagem}
                                />
                            </Button>
                        </div>
                        <form className="criar-anuncio-form">
                            <TextField id="standard-basic" label="Nome do an??ncio" variant="standard" required onChange={handleNome}/>
                            <TextField id="standard-basic" label="Descri????o" variant="standard" multiline required onChange={handleDescricao}/>
                            <TextField id="standard-basic" label="Contato" variant="standard" multiline required onChange={handleContato}/>
                            <div className="selecionar-categoria">
                                <FormControl fullWidth>
                                    <InputLabel id="categoria-anuncio-2">Categoria</InputLabel>
                                    <Select
                                        labelId="categoria-anuncio-2"
                                        id="categoria-anuncio"
                                        label="Categoria"
                                        onChange={handleCategoria}
                                        required
                                    >
                                        <MenuItem value={"carro"}>Autos e Pe??as</MenuItem>
                                        <MenuItem value={"celular"}>Eletr??nicos e Celulares</MenuItem>
                                        <MenuItem value={"musica"}>M??sicas e Hobbies</MenuItem>
                                        <MenuItem value={"moveis"}>Para sua casa</MenuItem>
                                        <MenuItem value={"outros"}>Outros</MenuItem>
                                    </Select>
                                </FormControl>
                                <div className="botao-criar-anuncio">
                                    <Button variant="contained" color="success" onClick={handleSubmit}>
                                        Criar An??ncio ????
                                    </Button>
                                </div>
                            </div>
                        </form>
                    
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default FormCriarAnuncio