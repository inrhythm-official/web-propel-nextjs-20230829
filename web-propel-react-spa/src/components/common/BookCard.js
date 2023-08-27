export default function BookCard({data, addButton, deleteButton}) {
    const handleAddBook = () => {
        fetch(`http://localhost:4000/api/booklist`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' , 'Authorization': `Bearer ${localStorage.getItem('token')}`},
            body: JSON.stringify(data)
        })
    }
    const handleDeleteBook = () => {
        fetch(`http://localhost:4000/api/booklist/${data.book_id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' , 'Authorization': `Bearer ${localStorage.getItem('token')}`},
            body: JSON.stringify(data)
        })
    }
    const renderAddButton = () => {
        if (addButton) {
            return (
                <button className="btn btn-primary" onClick={handleAddBook}>Add</button>
            )
        }
        if (deleteButton) {
            return (
                <button className="btn btn-primary" onClick={handleDeleteBook}>Delete</button>
            )
        }
    }
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{data.title}</h3>
                <p className="card-text">{data.author}</p>
                {renderAddButton()}
            </div>
        </div>
    );
}