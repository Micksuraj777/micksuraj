import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Scroll from './Components/Scroll'
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Scroll/>
      <About />
    </div>
  );
}

export default App;
