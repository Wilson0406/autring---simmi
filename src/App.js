import './App.css';
import India from './pages/India';
import Sports from './pages/Sports';
import ScienceAndTech from './pages/ScienceAndTech';
import International from './pages/International';
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {


  return (

    <>
    {/* <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<India />}>
            <Route path="/international" element={<International />} />
                  
            <Route path="/sports" element={<Sports />} />
                  
            <Route path="/scienetech" element={<ScienceAndTech />} />
                  
            <Route path="/india" element={<India />} />
          </Route>
        </Routes>

      </BrowserRouter>
       */}
       <India></India>
       {/* <Sports></Sports> */}
       {/* <ScienceAndTech></ScienceAndTech> */}
       {/* <International></International> */}
    </>
  );
}

export default App;
