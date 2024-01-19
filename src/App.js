import './App.css';
import About from './components/about';
import Home from './components/home';
import Testimonials from './components/testimonials';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Testimonials/>
    </div>
  );
}

export default App;
