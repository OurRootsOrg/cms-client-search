import React, { useState, MouseEvent } from 'react';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function NamePicker(): JSX.Element {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const handleClick = (event: MouseEvent<HTMLElement>): void => {
  //   setAnchorEl(anchorEl ? null : event.currentTarget);
  // };

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const fName = open ? 'simple-popper' : undefined;
  const lName = open ? 'simple-popper' : undefined;

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
          <input type="checkbox" aria-describedby={fName} onClick={handleClick}></input>
          Exact spelling and ...
          <Popover
            id={fName}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.popper}>1st</Typography>
          </Popover>
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
          <input type="checkbox" aria-describedby={lName} onClick={handleClick2}></input>
          Include spelling variations
          <Popover
            id={lName}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          ></Popover>
          {/* <Popper id={id} open={open} anchorEl={anchorEl}>
           </Popper> */}
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
    // border: '1px solid',
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: '#FFFFFF',
  },
}));
