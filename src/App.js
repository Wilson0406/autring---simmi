import './App.css';
import Navbar from './Components/Navbar';
import SectionLeftCard from './Section/section1/SectionLeftCard';
import SectionrightCard from './Section/section1/SectionrightCard';
import Header from './Components/wiliam/Header';
import Card from './Section/section2/Card';
import Section4_left from './Section/section4/Section4_left';
import Section4_right from './Section/section4/Section4_right';
import Section5_first from './Section/section5/Section5_first';
function App() {


  return (

    <>

      <Header></Header>
      <Navbar></Navbar>

      <div className="container" style={{ marginTop: "10px" }}>
        <div className="row">
          <div className="col-md-8" style={{ marginLeft: "28px" }} ><SectionLeftCard></SectionLeftCard></div>
          <div className="col-md-3" style={{ marginLeft: "7px" }}><SectionrightCard></SectionrightCard></div>

        </div>
      </div>

      <div className="container my-5">
        <Card></Card>
      </div>


      <div className="container" style={{ marginTop: "10px" }}>
        <div className="row">
          <div className="col-md-8" style={{ marginLeft: "28px" }} ><SectionLeftCard></SectionLeftCard></div>
          <div className="col-md-3" style={{ marginLeft: "7px" }}><SectionrightCard></SectionrightCard></div>

        </div>
      </div>


      <div className="container" style={{ marginTop: "20px", maxWidth: "68rem" }}>
        <div className="row">
          <div className="col-md-6">
            <Section4_left>
            </Section4_left>
          </div>

          <div className="col-md-6">
            <Section4_right>

            </Section4_right>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "10px" }}>
        <div className="row">
          <div className="col-md-8" style={{ marginLeft: "28px" }} ><SectionLeftCard></SectionLeftCard></div>
          <div className="col-md-3" style={{ marginLeft: "7px" }}><SectionrightCard></SectionrightCard></div>

        </div>
      </div>
    

      <div className="container my-5">
        <Card></Card>
      </div>

      <div className="container" style={{ marginTop: "20px", maxWidth: "68rem" }}>
      <div className="row">
        <div className="col-md-4">
        <Section5_first></Section5_first>
        </div>
        <div className="col-md-4">
        <Section5_first></Section5_first>
        </div>
        <div className="col-md-4">
        <Section5_first></Section5_first>
        </div>
      </div>

      </div>

      
     




    </>
  );
}

export default App;
