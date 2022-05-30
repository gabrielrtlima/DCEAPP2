import React, { useContext, useState } from 'react'
import Context from '../../store/Context'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";

const FormLogin = () => {
  const { setToken } = useContext(Context);
  const navigate = useNavigate();
  const [loginUsuario, setLoginUsuario] = useState({
    email: '',
    senha: ''
  });

  const handleEmail = (event) => {
    setLoginUsuario({
      ...loginUsuario,
      email: event.target.value
    });
  };

  const handleSenha = (event) => {
    setLoginUsuario({
      ...loginUsuario,
      senha: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    var formLogin = []
    for (var property in loginUsuario) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(loginUsuario[property]);
      formLogin.push(encodedKey + "=" + encodedValue);
    }
    formLogin = formLogin.join("&");

    const response = await fetch('https://dce-back.herokuapp.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formLogin
    });
    const data = await response.json();
    console.log(data);

    localStorage.setItem('token', data.token)
    localStorage.setItem('usuarioEmail', data.email)

    if(data.token) {
      setToken(data.token);
      navigate('/anuncios')
    }

  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="text-field">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          required={true}
          size="small"
          onChange={handleEmail}
          value={loginUsuario.email}
        />
        <TextField
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          margin="normal"
          required={true}
          size="small"
          value={loginUsuario.senha}
          onChange={handleSenha}
          type="password"
        />
      </div>
      <Button variant="contained" onClick={handleSubmit}>Entrar</Button>
      <Link to="/cadastro" id="login-link">
        Ainda não é cadastrado? Clique aqui!
      </Link>
    </Box>
  );
};

export default FormLogin;
