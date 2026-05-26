import {useState} from 'react';
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import './App.css';

function App() {

  // Tracks if the sidebar is collapsed or not
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

  return(
    <div className="app-container">
      <Header isCollapsed ={isCollapsed} toggleSidebar={toggleSidebar}/>
      <Navbar isCollapsed={isCollapsed}/>

      {/**BODY OF HOME PAGE HERE */}
      <div>
        {/**Left side (pics)*/}
        <div>
          <h2>(Images of OCs here)</h2>
        </div>

        {/**Right side (text)*/}
        <div>
          <h2>(Paragraph text goes here)</h2>
        </div>

        {/**Buttons */}
        <div>
          <button>Button 1</button>
        </div>

        <div>
          <button>Button 2</button>
        </div>

      </div>

      <Footer/>
    </div>
  );
}

export default App
