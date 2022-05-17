import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const FormLogin = () => {
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
        />
        <TextField
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          margin="normal"
          required={true}
          size="small"
        />
      </div>
      <Button variant="contained">Entrar</Button>
      <Link to="/cadastro" id="login-link">
        Ainda não é cadastrado? Clique aqui!
      </Link>
    </Box>
  );
};

export default FormLogin;
