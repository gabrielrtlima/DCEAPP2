import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ControlledRadioButtonsGroup(props) {
  const { value, handleChange } = props;

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Entidade</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="users" control={<Radio />} label="Usuários" />
        <FormControlLabel value="anuncios" control={<Radio />} label="Anúncios" />
      </RadioGroup>
    </FormControl>
  );
}
