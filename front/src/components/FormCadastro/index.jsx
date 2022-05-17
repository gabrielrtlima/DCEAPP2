import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const FormCadastro = () => {
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
            label="Nome"
            variant="outlined"
            margin="normal"
            required={true}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin="normal"
            required={true}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            margin="normal"
            required={true}
            size="small"
          />
           <TextField
            id="outlined-basic"
            label="Confirme a senha"
            variant="outlined"
            margin="normal"
            required={true}
            size="small"
          />
        </div>
        <Button variant="contained">Cadastrar</Button>
        <Link to="/login" id="login-link">
          Já possui cadastro? Faça seu login!
        </Link>
    </Box>
  );
};

export default FormCadastro;