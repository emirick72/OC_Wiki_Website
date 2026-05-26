
import {Link} from 'react-router-dom';
import '../App.css';

function Navbar({isCollapsed}) {

    return(
        <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
            <ul className="sidebar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/characters">Characters</Link></li>
                <li><Link to="/stories">Stories</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar