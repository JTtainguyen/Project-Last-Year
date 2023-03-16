import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import Details from './Detail';

const URL = 'https://openlibrary.org/api/books?bibkeys=ISBN:';

const BookDetails = () => {
    const { id } = useParams();
    const [, setLoading] = useState(false);
    const [details, setDetails] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        setLoading(true);
        async function getBookURL() {
            try {
                const response = await fetch(`${URL}${id}&jscmd=details&format=json`);
                const data = await response.json();
                console.log(data);
                if (data) {
                    const url = data[`ISBN:${id}`].details?.works[0].key.replace('/works/', '');
                    const download = data[`ISBN:${id}`].preview_url;
                    setDetails(url);
                    setUrl(download);
                } else {
                    setDetails('');
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        getBookURL();
    }, [id]);

    return <Details details={details} download={url} />;
};

export default BookDetails;
