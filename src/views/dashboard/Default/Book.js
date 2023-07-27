import React from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';

//Each book in the main screen
const Book = (book) => {
    return (
        <div className="book-item">
            <div className="book-item-img">
                <img src={book.cover_img} alt="cover" />
            </div>
            <div className="book-item-info">
                <Link to={`/book/${book.id}`} {...book} className="book-item-info-item title">
                    <div>
                        <span>{book.title}</span>
                    </div>
                </Link>

                <div className="book-item-info-item author">
                    <span className="text-capitalize fw-7">Author: </span>
                    <span>{book.author?.join(', ')}</span>
                </div>

                <div className="book-item-info-item edition-count">
                    <span className="text-capitalize fw-7">Total Editions: </span>
                    <span>{book.edition_count}</span>
                </div>

                <div className="book-item-info-item publish-year fs-15">
                    <span className="text-capitalize fw-7">First Publish Year: </span>
                    <span>{book.first_publish_year}</span>
                </div>
                <div className="rate">
                    <span className={`fa fa-star ${book.ratings_average > 1 ? 'checked' : ''}`}></span>
                    <span className={`fa fa-star ${book.ratings_average > 2 ? 'checked' : ''}`}></span>
                    <span className={`fa fa-star ${book.ratings_average > 3 ? 'checked' : ''}`}></span>
                    <span className={`fa fa-star ${book.ratings_average > 4 ? 'checked' : ''}`}></span>
                    <span className={`fa fa-star ${book.ratings_average > 5 ? 'checked' : ''}`}></span>
                </div>
            </div>
        </div>
    );
};

export default Book;
