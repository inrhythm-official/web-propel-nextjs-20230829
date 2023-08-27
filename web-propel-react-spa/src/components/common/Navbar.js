import Cookie from 'js-cookie'
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const isLoggedIn = Cookie.get('session')

    const handleLogout = () => {
        localStorage.removeItem('token');
        Cookie.remove('session')
        navigate('/')
    }
    const renderNavButtons = () => {
        if (isLoggedIn) {
            return (
                <div>
                    <NavLink className="btn btn-secondary me-2" to="/dashboard/add-books">Add Books</NavLink>
                    <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                </div>
            )
        }

        return (
            <NavLink className="btn btn-primary" to="/login">Login</NavLink>
        )
    }
    return (
        <nav className="d-flex align-items-center justify-content-between">
            <NavLink className='navbar-brand' to="/">
               <span className="display-5 text-bold">ReadersList</span>
            </NavLink>
            {renderNavButtons()}
        </nav>
    );
}