import "./Header.css"

const Header = () => {
    return (
        <header>
            <h2>
                <a href="/" id="user-name">Aman Pandya</a>
            </h2>

            <nav>
                <ul id="page-links">
                    <li>
                        <a href="/" id="current-page-link" className="nav-link">Home</a>
                    </li>
                    <li>
                        <a href="/blogs" className="nav-link">Blogs</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;