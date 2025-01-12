import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Works2 from "./components/Works/works2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ margin: '0px 0' }}>
        <Intro />
      </div>
      <div style={{ margin: '0px 0' }}>
        <Skills />
      </div>
      <div style={{ margin: '60px 0' }}>
        <Works />
      </div>
      <div style={{ margin: '20px 0' }}>
        <Works2 />
      </div>
      <div style={{ margin: '20px 0' }}>
        <Contact />
      </div>
      <div style={{ margin: '20px 0' }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
