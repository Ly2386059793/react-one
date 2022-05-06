import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import {BrowserRouter, Link, Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/news/:id' element={<News/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
