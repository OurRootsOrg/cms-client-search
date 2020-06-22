import React, { useState, MouseEvent } from 'react';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Popper from '@material-ui/core/Popper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

export default function NamePicker(): JSX.Element {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

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
          <input type="checkbox" aria-describedby={id} onClick={handleClick}></input>
          Include spelling variations
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <div className={classes.popper}>The content of the Popper.</div>
          </Popper>
          {/* <FormControlLabel
            control={<Checkbox color="primary" name="fnameVariations" value="yes" />}
            label="Include spelling variations"
          /> */}
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
          <input type="checkbox" aria-describedby={id} onClick={handleClick}></input>
          Include spelling variations
          <Popper id={id} open={open} anchorEl={anchorEl}>
            {/* <div className={classes.paper}>Content</div> */}
          </Popper>
          {/* <FormControlLabel
            control={<Checkbox color="primary" name="lnameVariations" value="yes" />}
            label="Include spelling variations"
          /> */}
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
  popper: {
    border: '1px solid',
    marginTop: theme.spacing(1),
    padding: theme.spacing(5),
    backgroundColor: '#FFFFFF',
  },
}));
