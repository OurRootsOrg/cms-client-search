import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { MouseEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SearchParams } from '../util/useSearch';
/* ------------- FirstName and LastName Popovers ------------- */
// import {ChangeEvent} from 'react'
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import Popover from '@material-ui/core/Popover';
/* ------------- Birth Year with +years radio buttons ------------- */
// import FormControl from '@material-ui/core/FormControl';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';

type Props = {
  params?: SearchParams;
};
export default function NamePicker(props: Props): JSX.Element {
  const classes = useStyles();
  const { params } = props;
  const { register } = useFormContext();
  const [firstAnchor, setFirstAnchor] = useState<undefined | HTMLElement>();
  const [lastAnchor, setLastAnchor] = useState<undefined | HTMLElement>();
  const [firstDisabled, setFirstDisabled] = useState(true);
  const [lastDisabled, setLastDisabled] = useState(true);

  // const [yearAnchor, setYearAnchor] = useState<undefined | HTMLElement>();
  // const [yearDisabled, setYearDisabled] = useState(true);

  // const [firstName, setFirstName] = useState({
  //   firstSounds: false,
  //   firstSimilar: false,
  //   firstInitials: false,
  // });

  // const [lastName, setLastName] = useState({
  //   lastSounds: false,
  //   lastSimilar: false,
  //   lastInitials: false,
  // });

  // const [birthYear, setBirthYear] = useState('thisYear');

  const handleClick1 = (event: MouseEvent<HTMLElement>): void => {
    setFirstAnchor(event.currentTarget);
    if (!firstAnchor) {
      setFirstDisabled(!firstDisabled);
      // setFirstName({
      //   firstSounds: false,
      //   firstSimilar: false,
      //   firstInitials: false,
      // });
    }
  };

  const handleClick2 = (event: MouseEvent<HTMLElement>): void => {
    setLastAnchor(event.currentTarget);
    if (!lastAnchor) {
      setLastDisabled(!lastDisabled);
      // setLastName({
      //   lastSounds: false,
      //   lastSimilar: false,
      //   lastInitials: false,
      // });
    }
  };

  const fName = firstAnchor && 'simple-popover';
  const lName = lastAnchor && 'simple-popover';
  // const eYear = yearAnchor && 'simple-popover';

  // const handleClickYear = (event: MouseEvent<HTMLElement>): void => {
  //   setYearAnchor(event.currentTarget);
  //   if (!yearAnchor) {
  //     setYearDisabled(!yearDisabled);
  //     // setBirthYear({}); //-----------------need to reset radio buttons on popover disabled
  //   }
  // };

  // const handleClose1 = (): void => {
  //   setFirstAnchor(undefined);
  // };
  // const handleClose2 = (): void => {
  //   setLastAnchor(undefined);
  // };

  // const handleCloseYear = (): void => {
  //   setYearAnchor(undefined);
  // };

  // const open = !!firstAnchor;
  // const open2 = !!lastAnchor;
  // const openYear = !!yearAnchor;

  // function handleChange1(event: ChangeEvent<HTMLInputElement>): void {
  //   setFirstName({ ...firstName, [event.target.name]: event.target.checked });
  // }

  // function handleChange2(event: ChangeEvent<HTMLInputElement>): void {
  //   setLastName({ ...lastName, [event.target.name]: event.target.checked });
  // }

  // function handleChangeYear(event: ChangeEvent<HTMLInputElement>): void {
  //   setBirthYear((event.target as HTMLInputElement).value);
  // }

  // const { firstSounds, firstSimilar, firstInitials } = firstName;
  // const { lastSounds, lastSimilar, lastInitials } = lastName;

  return (
    <div className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            inputRef={register}
            name="given"
            variant="outlined"
            fullWidth
            id="given"
            label="First Name"
            defaultValue={params?.given}
            autoFocus
          />
          <input
            type="checkbox"
            ref={register}
            name="givenExact"
            aria-describedby={fName}
            onClick={handleClick1}
          ></input>
          Exact Spelling
          {/* <Popover
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
          </Popover> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            inputRef={register}
            variant="outlined"
            fullWidth
            id="surname"
            label="Last Name"
            name="surname"
            defaultValue={params?.surname}
          />
          <input
            type="checkbox"
            ref={register}
            name="surnameExact"
            aria-describedby={lName}
            onClick={handleClick2}
          ></input>
          Exact Spelling
          {/* <Popover
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
          </Popover> */}
        </Grid>
        {/* <Grid item xs={4} sm={2}>
          <TextField
            inputRef={register}
            name="birthDate"
            variant="outlined"
            fullWidth
            id="birthDate"
            label="Birth Year"
            defaultValue={params?.birthDate}
          />
          <input
            type="checkbox"
            ref={register}
            name="exactToYears"
            aria-describedby={eYear}
            onClick={handleClickYear}
          ></input>
          Exact to...
          <Popover
            id={eYear}
            open={openYear}
            anchorEl={yearAnchor}
            onClose={handleCloseYear}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="eYear"
                name="exactToYearValue"
                value={birthYear}
                onChange={handleChangeYear}
              >
                <FormControlLabel
                  inputRef={register}
                  disabled={yearDisabled}
                  value="thisYear"
                  control={<Radio />}
                  label="This Year"
                />
                <FormControlLabel
                  inputRef={register}
                  disabled={yearDisabled}
                  value="1"
                  control={<Radio />}
                  label="+/-1 year"
                />
                <FormControlLabel
                  inputRef={register}
                  disabled={yearDisabled}
                  value="2"
                  control={<Radio />}
                  label="+/-2 years"
                />
                <FormControlLabel
                  inputRef={register}
                  disabled={yearDisabled}
                  value="5"
                  control={<Radio />}
                  label="+/-5 years"
                />
                <FormControlLabel
                  inputRef={register}
                  disabled={yearDisabled}
                  value="10"
                  control={<Radio />}
                  label="+/-10 years"
                />
              </RadioGroup>
            </FormControl>
          </Popover>
        </Grid> */}
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
  },
}));
