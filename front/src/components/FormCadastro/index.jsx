import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const FormCadastro = () => {
    const navigate = useNavigate()
    const [senhaIgual, setSenhaIgual] = useState("inicio");
    const [cadastroConcluido, setCadastroConcluido] = useState(false);
    const [emailCadastrado, setEmailCadastrado] = useState(false);

    const [dados, setDados] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    })

    useEffect(() => {
      if(dados.senha !== dados.confirmarSenha) {
        setSenhaIgual(false);
      } else setSenhaIgual(true)
      console.log(dados)
    }, [dados.senha, dados.confirmarSenha])

    const handleNome = (value) => {
        setDados({
            ...dados,
            nome: value
        })
    }

    const handleEmail = (value) => {
        setDados({
            ...dados,
            email: value
        })
    }

    const handleSenha = (value) => {
        setDados({
            ...dados,
            senha: value
        })
    }

    const handleConfirmarSenha = (value) => {
        setDados({
            ...dados,
            confirmarSenha: value
        })
    }

    const submit = async(e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:8080/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: dados.nome,
          email: dados.email,
          senha: dados.senha,
          tipoUsuario: [
            {
              id: 57,
              nome: 'Cliente'
            }
          ]
        })
      })
      const json = await response.json();
      console.log(json)
      if(json.status === 500) {
        setEmailCadastrado(true)
      } else {
        setCadastroConcluido(true)
        navigate('/login')
      }
    }

    return (
      <>
        {!senhaIgual && <Alert severity="error">As senhas não são iguais</Alert>}
        {cadastroConcluido && <Alert severity="success">Cadastro concluido com sucesso!</Alert>}
        {emailCadastrado && <Alert severity="error">Email já cadastrado!</Alert>}

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          autoValidate
          autoComplete="off"
        >
          <div className="text-field">
          <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              margin="normal"
              required={true}
              type="text"
              size="small"
              value={dados.nome}
              onChange={(e) => handleNome(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              type={'email'}
              variant="outlined"
              margin="normal"
              required={true}
              size="small"
              value={dados.email}
              onChange={(e) => handleEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              margin="normal"
              type={"password"}
              required={true}
              size="small"
              value={dados.senha}
              onChange={(e) => handleSenha(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Confirme a senha"
              type={"password"}
              variant="outlined"
              margin="normal"
              required={true}
              size="small"
              value={dados.confirmarSenha}
              onChange={(e) => handleConfirmarSenha(e.target.value)}
            />
          </div>
          <Button variant="contained" type='submit' onClick={submit}>Cadastrar</Button>
          <Link to="/login" id="login-link">
            Já possui cadastro? Faça seu login!
          </Link>
      </Box>
    </>
  );
};

export default FormCadastro;