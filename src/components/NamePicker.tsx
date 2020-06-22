import React, { useState, MouseEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function NamePicker(): JSX.Element {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const handleClose2 = (): void => {
    setAnchorEl2(null);
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const fName = open ? 'simple-popover' : undefined;
  const lName = open ? 'simple-popover' : undefined;

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
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <div className={classes.popover}>
              <input type="checkbox" id="soundsLike" name="soundsLike" value="soundsLike"></input>
              <br />
              <input type="checkbox" id="similiar" name="similiar" value="similiar"></input>
              <br />
              <input type="checkbox" id="initials" name="initials" value="initials"></input>
            </div>
          </Popover>
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
            open={open2}
            anchorEl={anchorEl2}
            onClose={handleClose2}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            {/* <Typography className={classes.popover}>2nd</Typography> */}
            <div className={classes.popover}>
              <input
                type="checkbox"
                id="soundsLike2"
                name="soundsLike2"
                value="soundsLike2"
              ></input>
              <br />
              <input type="checkbox" id="similiar2" name="similiar2" value="similiar2"></input>
              <br />
              <input type="checkbox" id="initials2" name="initials2" value="initials2"></input>
            </div>
          </Popover>
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
  popover: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: '#FFFFFF',
  },
}));
