import { useEffect, useState } from "react";
import ProtectedLayout from "../common/ProtectedLayout";
import BookCard from "../common/BookCard";

export default function Dashboard() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/api/booklist`, {
            headers: { 'Content-Type': 'application/json' , 'Authorization': `Bearer ${localStorage.getItem('token')}`},
        })
            .then(res => res.json())
            .then(res => setBooks(res))
    }, [])

    const deleteFn = (id) => {
       setBooks(books.filter(book => book.book_id !== id))
    }

    return (
        <ProtectedLayout>
            <div className="my-5 row">
                {books.length === 0 && <p className="mx-1 mx-xxl-0">You currently don't have any books on your reading list.</p>}
                {books.map(book => {
                    return <div className='col-md-3'><BookCard key={book.title} data={book} deleteButton={true} deleteFn={deleteFn} /></div>
                })}
            </div>
        </ProtectedLayout>
    );
}