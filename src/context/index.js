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

    //Fetch 20 books that contain the key word
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

                //check if there is a book contaisn that keyword
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

    //fetch 20 books to display on the dashboard screen
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

    //fetch the books type romance (because this api does not support search by type so just search by keyword love)
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

    //fetch the books type kids (because this api does not support search by type so just search by keyword kid)
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

    //fetch the books type thriller (because this api does not support search by type so just search by keyword thriller)
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

    // fetch data again if there is a chnage with data
    useEffect(() => {
        fetchBooks();
        fetchDashboard();
        fetchRomance();
        fetchKid();
        fetchThrillers();
        fetchTextbooks();
    }, [searchTerm, fetchDashboard, fetchBooks, fetchRomance, fetchKid, fetchThrillers, fetchTextbooks]);

    // use context that will not consume much time when navigate (load 1 time at the beginning and then does not need to load again when navigate)
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
