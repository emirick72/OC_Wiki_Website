import {BrowserRouter} from 'react-router-dom';

import Header from "./Components/Header"
import Navbar from "./Components/Navbar";

function App() {

  return(
    <BrowserRouter>
      <Header/>
      <Navbar/>
      {/**Navbar links here */}
    </BrowserRouter>
  );
}

export default App
