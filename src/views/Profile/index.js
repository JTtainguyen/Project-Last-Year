import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, Grid, InputLabel, OutlinedInput, TextField, useMediaQuery } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets

// ===========================|| REGISTER ||=========================== //

const Profile = ({ ...others }) => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const [, setStrength] = useState(0);
    const [, setLevel] = useState();

    const user = JSON.parse(localStorage.getItem('activeUser'));

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [users, setUsers] = useState([]);

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    const fetchUsers = async () => {
        await fetch('https://6413494bc469cff60d5ef0c5.mockapi.io/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    };

    useEffect(() => {
        changePassword('123456');
        fetchUsers();
    }, [email]);

    const handleUpdate = (e) => {
        e.preventDefault();
        users?.map((user) => {
            if (user.email == email) {
                fetch(`https://6413494bc469cff60d5ef0c5.mockapi.io/users/${user.id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify({ ...user, first_name: firstName, last_name: lastName, email: email })
                })
                    .then((response) => response.json())
                    .then((response) => console.log(JSON.stringify(response)));
                localStorage.setItem('activeUser', JSON.stringify({ firstName: firstName, lastName: lastName, email: email }));
            }
            return user;
        });
    };

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    console.log(values);
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, isSubmitting, touched }) => (
                    <form noValidate onSubmit={handleUpdate} {...others}>
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    margin="normal"
                                    name="fname"
                                    type="text"
                                    defaultValue={firstName}
                                    sx={{ ...theme.typography.customInput }}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    margin="normal"
                                    name="lname"
                                    type="text"
                                    defaultValue={lastName}
                                    sx={{ ...theme.typography.customInput }}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-email-register">Email Address / Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-register"
                                type="email"
                                value={email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    setEmail(e.target.value);
                                }}
                                inputProps={{}}
                            />
                        </FormControl>

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleUpdate}
                                >
                                    Save
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default Profile;
