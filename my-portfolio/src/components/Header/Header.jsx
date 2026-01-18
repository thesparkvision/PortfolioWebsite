import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <header>
            <h2>
                <Link to="/" id="user-name">Aman Pandya</Link>
            </h2>

            <nav>
                <ul id="page-links">
                    <li>
                        <Link to="/" id="current-page-link" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs" className="nav-link">Blogs</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
