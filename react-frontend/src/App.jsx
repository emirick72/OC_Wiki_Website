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
      <div className="home-body-container">
        {/**Left side (pics)*/}
        <div className="home-body-left">
          <h2>My Original Characters</h2>

          {/**Gallery Grid Container */}
          <div className="avatar-grid">
            <div className="circle-frame circle-1">
              {/**IMAGE SRC GOES HERE LATER */}
            </div>
            <div className="circle-frame circle-2">
              {/**IMAGE SRC GOES HERE LATER */}
            </div>
            <div className="circle-frame circle-3">
              {/**IMAGE SRC GOES HERE LATER */}
            </div>

          </div>


        </div>

        {/**Right side (text and buttons)*/}
        <div className="home-body-right">
          <h2>(Paragraph text goes here)</h2>
        
          {/**Buttons */}
          <div className="buttons-group">
            <button>Characters</button>
            <button>Stories</button>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App
