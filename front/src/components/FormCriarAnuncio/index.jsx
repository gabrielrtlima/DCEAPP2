import React, { useState, useEffect } from 'react'
import { Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material'
import './index.css'

const FormCriarAnuncio = () => {
    const [categoria, setCategoria] = useState('')

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
    }

    return(
        <>
            <div className="criar-anuncio-body">
                <div className="criar-anuncio-body-content">
                    <div className="criar-anuncio-title">
                        CRIAR ANÚNCIO 📢
                    </div>
                    <div className="container-criar-anuncio">
                        <div className="criar-anuncio-img">
                            <img src="./img-anuncio.svg" alt=""/>
                            <Button
                            variant="contained"
                            component="label"
                            >
                                Selecionar Imagem
                                <input
                                    type="file"
                                    hidden
                                    required
                                />
                            </Button>
                        </div>
                        <form className="criar-anuncio-form">
                            <TextField id="standard-basic" label="Nome do anúncio" variant="standard" required />
                            <TextField id="standard-basic" label="Descrição" variant="standard" multiline required/>
                            <div className="selecionar-categoria">
                                <FormControl fullWidth>
                                    <InputLabel id="categoria-anuncio-2">Categoria</InputLabel>
                                    <Select
                                        labelId="categoria-anuncio-2"
                                        id="categoria-anuncio"
                                        value={categoria}
                                        label="Categoria"
                                        onChange={handleChangeCategoria}
                                        required
                                    >
                                        <MenuItem value={"carro"}>Autos e Peças</MenuItem>
                                        <MenuItem value={"celular"}>Eletrônicos e Celulares</MenuItem>
                                        <MenuItem value={"musica"}>Músicas e Hobbies</MenuItem>
                                        <MenuItem value={"moveis"}>Para sua casa</MenuItem>
                                        <MenuItem value={"outros"}>Outros</MenuItem>
                                    </Select>
                                </FormControl>
                                <div className="botao-criar-anuncio">
                                    <Button variant="contained" color="success">
                                        Criar Anúncio 🥳
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