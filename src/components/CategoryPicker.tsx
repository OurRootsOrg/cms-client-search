import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';

export default function CategoryPicker(): JSX.Element {
  const classes = useStyles();
  const { register } = useFormContext();
  const [category, setCategory] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<{ value: unknown }>) =>
    setCategory(event.target.value as string[]);

  return (
    <div>
      <Typography component="h2" variant="h6" style={{ marginTop: 20 }}>
        Restrict results to specific categories
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="mutiple-checkbox-label">Select</InputLabel>
        <Select
          inputRef={register}
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={category}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (selected as string[]).join(', ')}
          MenuProps={MenuProps}
        >
          {selector.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox inputRef={register} checked={category.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography>
        <Link href="https://ourroots.org/">Learn more about our collections &gt;</Link>
      </Typography>
    </div>
  );
}

const selector = [
  'Birth, Baptism, and Christening',
  'Marriage',
  'Death',
  'Census, Residence, and Lists',
  'Immigration and Naturalization',
  'Military',
  'Probate',
  'Other',
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 600,
    maxWidth: 600,
  },
}));

const itemHeight = 48;
const itemPaddingTop = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: itemHeight * 4.5 + itemPaddingTop,
      width: 250,
    },
  },
};
