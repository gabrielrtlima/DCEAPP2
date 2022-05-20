import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';

export default function SelectLabels() {
  const [enity, setEnity] = React.useState('user');

  return (
    <div>
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Entidade
        </InputLabel>
        <NativeSelect
          defaultValue={enity}
          inputProps={{
            name: 'enity',
            id: 'enity-native',
          }}
        >
          <option onClick={() => setEnity("user")}>Usuário</option>
          <option onClick={() => setEnity("anuncio")}>Anúncio</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
