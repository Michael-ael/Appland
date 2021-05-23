import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Header from './components/Header';
import Presentation from './components/Presentation';
import AboutImage from './images/About.png'
import AboutImage1 from './images/download.png'

function App() {
  return (
    <div className="app">
      <Header />
      <Feature />
      <About image={AboutImage} title='Comes With All You Need For Daily Life' button='Set The App' />
      <About image={AboutImage1} title='Download And Get The App Now' button='Download' />
      <Presentation />
      <Contact />
    </div>
  );
}

export default App;
