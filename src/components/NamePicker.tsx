import React, { useState, MouseEvent, ChangeEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function NamePicker(): JSX.Element {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const [state, setState] = useState({
    sounds: false,
    similar: false,
    initials: false,
  });

  const [disabled2, setDisabled2] = useState(true);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl2(event.currentTarget);
    if (anchorEl2 === null) {
      setDisabled2(!disabled2);
      setState({
        sounds: false,
        similar: false,
        initials: false,
      });
    }
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { sounds, similar, initials } = state;

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
            <div className={classes.checkbox}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        disabled={disabled2}
                        checked={sounds}
                        onChange={handleChange}
                        name="sounds"
                        color="primary"
                      />
                    }
                    label="Sounds like"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        disabled={disabled2}
                        checked={similar}
                        onChange={handleChange}
                        name="similar"
                        color="primary"
                      />
                    }
                    label="Similar"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        disabled={disabled2}
                        checked={initials}
                        onChange={handleChange}
                        name="initials"
                        color="primary"
                      />
                    }
                    label="Initials"
                  />
                </FormGroup>
              </FormControl>
              /
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
  formControl: {
    margin: theme.spacing(3),
  },
  checkbox: {
    display: 'flex',
    // color: 'primary',
  },
}));
