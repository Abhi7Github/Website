import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Servises from './Components/Servises';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Review from './Components/Review';
import Project from './Components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Servises />
      <Project />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
