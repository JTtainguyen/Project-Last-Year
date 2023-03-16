import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
const URL = 'http://openlibrary.org/search.json?title=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('the lost world');
    const [books, setBooks] = useState([]);
    const [dashboard, setDashboard] = useState([]);
    const [romance, setRomance] = useState([]);
    const [kid, setKid] = useState([]);
    const [thriller, setThriller] = useState([]);
    const [textbooks, setTextbooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState('');

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const { docs } = data;
            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { isbn, author_name, cover_i, edition_count, first_publish_year, title, ratings_average } = bookSingle;

                    return {
                        id: isbn,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                        ratings_average: ratings_average ? ratings_average : 0
                    };
                });

                setBooks(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle('Your Search Result');
                } else {
                    setResultTitle('No Search Result Found!');
                }
            } else {
                setBooks([]);
                setResultTitle('No Search Result Found!');
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    const fetchDashboard = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('http://openlibrary.org/search.json?title=lost the world');
            const data = await response.json();
            const { docs } = data;
            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { isbn, author_name, cover_i, edition_count, first_publish_year, title, ratings_average } = bookSingle;

                    return {
                        id: isbn,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                        ratings_average: ratings_average ? ratings_average : 0
                    };
                });

                setDashboard(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle('Your Search Result');
                } else {
                    setResultTitle('No Search Result Found!');
                }
            } else {
                setDashboard([]);
                setResultTitle('No Search Result Found!');
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, []);

    const fetchRomance = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('http://openlibrary.org/search.json?title=love');
            const data = await response.json();
            const { docs } = data;

            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { isbn, author_name, cover_i, edition_count, first_publish_year, title, ratings_average } = bookSingle;

                    return {
                        id: isbn,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                        ratings_average: ratings_average ? ratings_average : 0
                    };
                });

                setRomance(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle('Your Search Result');
                } else {
                    setResultTitle('No Search Result Found!');
                }
            } else {
                setRomance([]);
                setResultTitle('No Search Result Found!');
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, []);

    const fetchKid = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('http://openlibrary.org/search.json?title=kid');
            const data = await response.json();
            const { docs } = data;

            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { isbn, author_name, cover_i, edition_count, first_publish_year, title, ratings_average } = bookSingle;

                    return {
                        id: isbn,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                        ratings_average: ratings_average ? ratings_average : 0
                    };
                });

                setKid(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle('Your Search Result');
                } else {
                    setResultTitle('No Search Result Found!');
                }
            } else {
                setKid([]);
                setResultTitle('No Search Result Found!');
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, []);

    const fetchThrillers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('http://openlibrary.org/search.json?title=thriller');
            const data = await response.json();
            const { docs } = data;

            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { isbn, author_name, cover_i, edition_count, first_publish_year, title, ratings_average } = bookSingle;

                    return {
                        id: isbn,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                        ratings_average: ratings_average ? ratings_average : 0
                    };
                });

                setThriller(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle('Your Search Result');
                } else {
                    setResultTitle('No Search Result Found!');
                }
            } else {
                setThriller([]);
                setResultTitle('No Search Result Found!');
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, []);

    const fetchTextbooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('http://openlibrary.org/search.json?title=book');
            const data = await response.json();
            const { docs } = data;
            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { isbn, author_name, cover_i, edition_count, first_publish_year, title, ratings_average } = bookSingle;

                    return {
                        id: isbn,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                        ratings_average: ratings_average ? ratings_average : 0
                    };
                });

                setTextbooks(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle('Your Search Result');
                } else {
                    setResultTitle('No Search Result Found!');
                }
            } else {
                setTextbooks([]);
                setResultTitle('No Search Result Found!');
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBooks();
        fetchDashboard();
        fetchRomance();
        fetchKid();
        fetchThrillers();
        fetchTextbooks();
    }, [searchTerm, fetchDashboard, fetchBooks, fetchRomance, fetchKid, fetchThrillers, fetchTextbooks]);

    return (
        <AppContext.Provider
            value={{
                loading,
                books,
                dashboard,
                romance,
                kid,
                thriller,
                textbooks,
                setSearchTerm,
                resultTitle,
                setResultTitle
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
