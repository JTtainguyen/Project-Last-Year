// material-ui
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import './rate.css';
import { useState, useEffect } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //
const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    marginTop: '20px',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf'
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
});

const AboutUs = () => {
    const [rating, setRating] = useState(+JSON.parse(localStorage.getItem('activeUser')).rate);
    const [hover, setHover] = useState(0);
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        await fetch('https://6413494bc469cff60d5ef0c5.mockapi.io/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <MainCard title="About Us">
                <Typography variant="body2">
                    This is web application product of Group 7. This product is developed for free download a document from Open Library
                    source. Thank you for using and if you have any questions, please contact us by email button bellow.
                </Typography>
                <CustomButton variant="contained" href="mailto:nguyentaidhsp@gmail.com">
                    Leave some comments
                </CustomButton>
            </MainCard>
            <MainCard title="Members" styled={{ marginTop: '200px' }}>
                <Typography variant="body2">BA10-055 Nguyen Van Tai</Typography>
                <Typography variant="body2">BA10-066 Nguyen Duc Anh Tuan</Typography>
                <Typography variant="body2">BA10-024 Kieu Khanh Huyen</Typography>
                <Typography variant="body2">BA10-055 Nguyen Le Dinh Vu</Typography>
            </MainCard>
            <MainCard title="Rate Us">
                <div className="star-rating">
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type="button"
                                key={index}
                                className={index <= (hover || rating) ? 'on' : 'off'}
                                onClick={() => {
                                    setRating(index);
                                    const activeUser = JSON.parse(localStorage.getItem('activeUser'));
                                    const newUser = {
                                        ...activeUser,
                                        rate: index.toString()
                                    };
                                    localStorage.setItem('activeUser', JSON.stringify(newUser));
                                    users?.map((user) => {
                                        if (user.email == activeUser.email) {
                                            fetch(`https://6413494bc469cff60d5ef0c5.mockapi.io/users/${user.id}`, {
                                                method: 'PUT',
                                                headers: {
                                                    Accept: 'application/json',
                                                    'Content-type': 'application/json; charset=UTF-8'
                                                },
                                                body: JSON.stringify({
                                                    ...user,
                                                    rate: newUser.rate,
                                                    first_name: activeUser.firstName,
                                                    last_name: activeUser.lastName
                                                })
                                            })
                                                .then((response) => response.json())
                                                .then((response) => console.log(JSON.stringify(response)));
                                            localStorage.setItem('activeUser', JSON.stringify(newUser));
                                        }
                                        return user;
                                    });
                                }}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <span className="star">&#9733;</span>
                            </button>
                        );
                    })}
                </div>
            </MainCard>
        </>
    );
};

export default AboutUs;
