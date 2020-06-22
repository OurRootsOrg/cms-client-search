import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Popper from '@material-ui/core/Popper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

export default function NamePicker(): JSX.Element {
  const classes = useStyles();
  const [checkbox, setCheckBox] = useState(false);
  const [checkbox2, setCheckBox2] = useState(false);

  return (
    <div className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />

          <FormControlLabel
            control={<Checkbox color="primary" name="fnameVariations" value="yes" />}
            label="Include spelling variations"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
          />
          <FormControlLabel
            control={<Checkbox color="primary" name="lnameVariations" value="yes" />}
            label="Include spelling variations"
          />
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
}));
