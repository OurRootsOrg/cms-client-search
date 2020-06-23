import React, { useState, MouseEvent, ChangeEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function NamePicker(): JSX.Element {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const [disabled1, setDisabled1] = useState(true);
  const [disabled2, setDisabled2] = useState(true);
  const [firstName, setFirstName] = useState({
    firstSounds: false,
    firstSimilar: false,
    firstInitials: false,
  });

  const [lastName, setLastName] = useState({
    lastSounds: false,
    lastSimilar: false,
    lastInitials: false,
  });

  const handleClick1 = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
    if (anchorEl === null) {
      setDisabled1(!disabled1);
      setFirstName({
        firstSounds: false,
        firstSimilar: false,
        firstInitials: false,
      });
    }
  };

  const handleClick2 = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl2(event.currentTarget);
    if (anchorEl2 === null) {
      setDisabled2(!disabled2);
      setLastName({
        lastSounds: false,
        lastSimilar: false,
        lastInitials: false,
      });
    }
  };

  const handleClose1 = (): void => {
    setAnchorEl(null);
  };
  const handleClose2 = (): void => {
    setAnchorEl2(null);
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const fName = open ? 'simple-popover' : undefined;
  const lName = open ? 'simple-popover' : undefined;

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>): void => {
    setFirstName({ ...firstName, [event.target.name]: event.target.checked });
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>): void => {
    setLastName({ ...lastName, [event.target.name]: event.target.checked });
  };

  const { firstSounds, firstSimilar, firstInitials } = firstName;
  const { lastSounds, lastSimilar, lastInitials } = lastName;

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
          <input type="checkbox" aria-describedby={fName} onClick={handleClick1}></input>
          Exact spelling and ...
          <Popover
            id={fName}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose1}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <div className={classes.checkbox}>
              <FormGroup className={classes.formControl}>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={disabled1}
                      checked={firstSounds}
                      onChange={handleChange1}
                      name="firstSounds"
                      color="primary"
                    />
                  }
                  label="Sounds like"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={disabled1}
                      checked={firstSimilar}
                      onChange={handleChange1}
                      name="firstSimilar"
                      color="primary"
                    />
                  }
                  label="Similar"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={disabled1}
                      checked={firstInitials}
                      onChange={handleChange1}
                      name="firstInitials"
                      color="primary"
                    />
                  }
                  label="Initials"
                />
              </FormGroup>
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
          Exact Spelling and ...
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
            <div className={classes.checkbox}>
              <FormGroup className={classes.formControl}>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={disabled2}
                      checked={lastSounds}
                      onChange={handleChange2}
                      name="lastSounds"
                      color="primary"
                    />
                  }
                  label="Sounds like"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={disabled2}
                      checked={lastSimilar}
                      onChange={handleChange2}
                      name="lastSimilar"
                      color="primary"
                    />
                  }
                  label="Similar"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={disabled2}
                      checked={lastInitials}
                      onChange={handleChange2}
                      name="lastInitials"
                      color="primary"
                    />
                  }
                  label="Initials"
                />
              </FormGroup>
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
    color: 'primary',
  },
  popover: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: '#FFFFFF',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  checkbox: {
    marginTop: theme.spacing(1),
    display: 'flex',
    // color: 'primary',
  },
}));
