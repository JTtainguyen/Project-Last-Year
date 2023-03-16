import { useEffect, useState } from 'react';
import React from 'react';
import { useGlobalContext } from '../../../context/index';
import Book from '../../dashboard/Default/Book';
import '../../dashboard/Default/BookList.css';
import coverImg from '../../dashboard/Default/cover_not_found.jpg';

// material-ui
import { Grid } from '@mui/material';

// project imports

import { gridSpacing } from 'store/constant';
import Search from './Search';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const SearchSection = () => {
    const { books } = useGlobalContext();
    const booksWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            // removing /works/ to get only id
            id: singleBook.id[0],
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
        };
    });

    return (
        <>
            <Search />
            <section className="booklist">
                <div className="container">
                    <div className="section-title">{/* <h2>{resultTitle}</h2> */}</div>
                    <div className="booklist-content">
                        {booksWithCovers.slice(0, 40).map((item, index) => {
                            return <Book key={index} {...item} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SearchSection;
