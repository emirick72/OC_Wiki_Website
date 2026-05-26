
import Searchbar from "./Searchbar";
function Header({isCollapsed, toggleSidebar}) {

    return(
        <header className="site-header">

            <button className={`toggle-button ${isCollapsed ? 'btn-collapsed' : 'btn-open'}`}
                onClick={toggleSidebar}
            >
                {isCollapsed ? '☰' : 'X'}
            </button>

            <h1>Original Characters Wiki</h1>
            <Searchbar/>
        </header>
    );
}

export default Header