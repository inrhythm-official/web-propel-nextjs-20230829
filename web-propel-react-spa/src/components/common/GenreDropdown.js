import Dropdown from 'react-bootstrap/Dropdown';

const genres = [
    { id: 1, name: 'Hardcover Fiction', value: 'hardcover-fiction' },
    { id: 2, name: 'Hardcover Nonfiction', value: 'hardcover-nonfiction' },
    { id: 3, name: 'E-Book Fiction', value: 'e-book-fiction' },
    { id: 4, name: 'E-Book Nonfiction', value: 'e-book-nonfiction' }
];

function GenreDropdown({setGenre}) {
    return (
        <div>
            <Dropdown onSelect={(eventKey) => setGenre(eventKey)}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Genres
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {genres.map(genre => {
                        return <Dropdown.Item key={genre.id} eventKey={genre.value}>{genre.name}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default GenreDropdown;