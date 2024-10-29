import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const FavoriteBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(error => console.error("Error fetching books:", error));
    }, []);

    return (
        <div>
            <BookCard books={books} headLine="Best Seller Books" />
        </div>
    );
};

export default FavoriteBooks;
