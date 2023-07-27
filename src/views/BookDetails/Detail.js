import { useState, useEffect } from 'react';
import coverImg from '../dashboard/Default/cover_not_found.jpg';
import './style.css';
import { FaArrowLeft } from 'react-icons/fa';

const Details = ({ details, download }) => {
    const [, setLoading] = useState(false);
    const [book, setBook] = useState(null);
    //get the detail information of the specific book
    useEffect(() => {
        setLoading(true);
        async function getBookDetails(details) {
            if (details) {
                try {
                    const response = await fetch(`https://openlibrary.org/works/${details}.json`);
                    const data = await response.json();
                    const { description, title, covers, subject_places, subject_times, subjects } = data;
                    if (data) {
                        const newBook = {
                            description: description ? description.value : 'No description found',
                            title: title,
                            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
                            subject_places: subject_places ? subject_places.join(', ') : 'No subject places found',
                            subject_times: subject_times ? subject_times.join(', ') : 'No subject times found',
                            subjects: subjects ? subjects.join(', ') : 'No subjects found'
                        };
                        setBook(newBook);
                    } else {
                        setBook(null);
                    }
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        getBookDetails(details);
    }, [details]);

    const handleDownload = () => {
        window.open(`${download}`);
    };
    return (
        <section className="book-details">
            <div className="container">
                <button type="button" className="back-btn" onClick={() => history.back()}>
                    <FaArrowLeft size={22} />
                    <span>Go Back</span>
                </button>

                <div className="book-details-content">
                    <div className="book-details-img">
                        <img src={book?.cover_img} alt="cover img" />
                    </div>
                    <div className="book-details-info">
                        <div className="book-details-item title">
                            <span className="fw-6 fs-24">{book?.title}</span>
                        </div>
                        <div className="book-details-item description">
                            <span>{book?.description}</span>
                        </div>
                        <div className="book-details-item">
                            <span className="fw-6">Subject Places: </span>
                            <span className="text-italic">{book?.subject_places}</span>
                        </div>
                        <div className="book-details-item">
                            <span className="fw-6">Subject Times: </span>
                            <span className="text-italic">{book?.subject_times}</span>
                        </div>
                        <div className="book-details-item">
                            <span className="fw-6">Subjects: </span>
                            <span>{book?.subjects}</span>
                        </div>
                        <button className="download-btn" onClick={handleDownload}>
                            Preview
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
