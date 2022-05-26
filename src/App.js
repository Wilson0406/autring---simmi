import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Wilson/Header';
import India from './pages/India';
import Economy from './pages/Economy';
import Politics from './pages/Politics';
import Sports from './pages/Sports';
import ScienceAndTech from './pages/ScienceAndTech';
import International from './pages/International';
import Governance from './pages/Governance';
import Navbar from './Components/Navbar';
import Error from './pages/Error';
import Footer from './Components/Paras/Footer';

function App() {


  return (

    <>
    <Header></Header>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<India/>} />
        <Route exact path='/india' element={<India/>} />
        <Route exact path='/international' element={<International/>} />
        <Route exact path='/political' element={<Politics/>} />
        <Route exact path='/governance' element={<Governance/>} />
        <Route exact path='/economy' element={<Economy/>} />
        <Route exact path='/sports' element={<Sports/>} />
        <Route exact path='/science' element={<ScienceAndTech/>} />
      </Routes>
       {/* <India></India> */}
       {/* <Sports></Sports> */}
       {/* <ScienceAndTech></ScienceAndTech> */}
       {/* <International></International> */}
       {/* <Politics></Politics> */}
       {/* <Economy></Economy> */}
       {/* <Governance></Governance> */}
    </Router>
    <Footer></Footer>
    </>

  );
}

export default App;
