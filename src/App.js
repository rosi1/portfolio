
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
      params={{
        particles:{
          number:{
            value: 40,
            density:{
              enable: true,
              value_area: 900
            }
          },
          shape:{
            type: 'circle',
            stroke:{
              width:5,
              color: '#dbe6f6'
            }
          }
        }
      }}
    />
      <Navbar/>
      <Header/>
      <AboutMe/>
    </>
  );
}

export default App;
