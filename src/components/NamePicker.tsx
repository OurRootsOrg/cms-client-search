import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';

export default function NamePicker(): JSX.Element {
  const classes = useStyles();
  const { register } = useFormContext();
  const [firstAnchor, setFirstAnchor] = useState<undefined | HTMLElement>();
  const [lastAnchor, setlastAnchor] = useState<undefined | HTMLElement>();
  const [firstDisabled, setFirstDisabled] = useState(true);
  const [lastDisabled, setLastDisabled] = useState(true);
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
    setFirstAnchor(event.currentTarget);
    if (!firstAnchor) {
      setFirstDisabled(!firstDisabled);
      setFirstName({
        firstSounds: false,
        firstSimilar: false,
        firstInitials: false,
      });
    }
  };

  const handleClick2 = (event: MouseEvent<HTMLElement>): void => {
    setlastAnchor(event.currentTarget);
    if (!lastAnchor) {
      setLastDisabled(!lastDisabled);
      setLastName({
        lastSounds: false,
        lastSimilar: false,
        lastInitials: false,
      });
    }
  };

  const handleClose1 = (): void => {
    setFirstAnchor(undefined);
  };
  const handleClose2 = (): void => {
    setlastAnchor(undefined);
  };

  const open = !!firstAnchor;
  const open2 = !!lastAnchor;

  const fName = firstAnchor && 'simple-popover';
  const lName = lastAnchor && 'simple-popover';

  function handleChange1(event: ChangeEvent<HTMLInputElement>): void {
    setFirstName({ ...firstName, [event.target.name]: event.target.checked });
  }

  function handleChange2(event: ChangeEvent<HTMLInputElement>): void {
    setLastName({ ...lastName, [event.target.name]: event.target.checked });
  }

  const { firstSounds, firstSimilar, firstInitials } = firstName;
  const { lastSounds, lastSimilar, lastInitials } = lastName;

  return (
    <div className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            inputRef={register}
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
          <input
            type="checkbox"
            ref={register}
            name="firstNameExactSpelling"
            aria-describedby={fName}
            onClick={handleClick1}
          ></input>
          Exact spelling and ...
          <Popover
            id={fName}
            open={open}
            anchorEl={firstAnchor}
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
                      inputRef={register}
                      disabled={firstDisabled}
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
                      inputRef={register}
                      disabled={firstDisabled}
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
                      inputRef={register}
                      disabled={firstDisabled}
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
            inputRef={register}
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
          />
          <input
            type="checkbox"
            ref={register}
            name="lastNameExactSpelling"
            aria-describedby={lName}
            onClick={handleClick2}
          ></input>
          Exact Spelling and ...
          <Popover
            id={lName}
            open={open2}
            anchorEl={lastAnchor}
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
                      inputRef={register}
                      disabled={lastDisabled}
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
                      inputRef={register}
                      disabled={lastDisabled}
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
                      inputRef={register}
                      disabled={lastDisabled}
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
  formControl: {
    margin: theme.spacing(3),
  },
  checkbox: {
    marginTop: theme.spacing(1),
    display: 'flex',
    // color: 'primary',
  },
}));
