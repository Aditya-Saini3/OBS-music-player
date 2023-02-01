import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFloppyDisk, faHeart, faHouseChimney, faUser } from "@fortawesome/free-solid-svg-icons"

function Sidebar() {
    return (
        <div className="sidebar">
            <img src="/logo.svg" alt="Website logo named OBS Music Player Logo" className="site-logo"/>
            <nav>
                <ul className="navigation-bar">
                    <li>
                        <FontAwesomeIcon icon={faHouseChimney} className="navbar-icon"/>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFloppyDisk} className="navbar-icon"/>
                        <Link to="/genre">Genre</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUser} className="navbar-icon"/>
                        <Link to="/artists">Artists</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faHeart} className="navbar-icon"/>
                        <Link to="/favourites">Favourites</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar