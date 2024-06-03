
import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Gallery from './Components/Gallery/Gallery';
import Hero from './Components/Hero/Hero';
import Map from './Components/Map/Map';
import Navbar from './Components/Navbar/Navbar';
import Room from './Components/Room/Room';
import Services from './Components/Services/Services';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Room />
      <Services />
      <Banner />
      <Gallery />
      <Form />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
