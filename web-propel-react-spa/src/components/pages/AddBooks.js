import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom"
import GenreDropdown from "../common/GenreDropdown";
import BookCard from "../common/BookCard"
import ProtectedLayout from "../common/ProtectedLayout";

export default function AddBooks() {
    const [genre, setGenre] = useState('hardcover-fiction')
    const [books, setBooks] = useState([])

    useEffect(() => {
                fetch(`http://localhost:4000/api/books?genre=${genre}`)
                    .then(res => res.json())
                    .then(res => setBooks(res.books))
    }, [genre])

    return (

        <ProtectedLayout>
            <NavLink to="/dashboard" className="block mt-5">Back to Dashboard</NavLink>
            <div className="mb-2 d-flex align-items-center justify-content-between">
                <h1>Add Books</h1>
                <GenreDropdown setGenre={setGenre} />
            </div>
            <div className="row">
                {books.map(book => {
                    return <div className='col-md-3 mb-3'><BookCard key={book.title} data={book} addButton={true}  /></div>
                })}
            </div>
        </ProtectedLayout>
    );
}