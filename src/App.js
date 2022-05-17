import { useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import { data } from './cardData'
import Card from './components/card/Card';
import Footer from './components/footer/Footer';


function App() {
  const [inCart, setInCart] = useState(0)
  return (
    <div className="App">
      <Navbar inCart={inCart} setInCart={setInCart} />
      <Banner />
      <div className="cards">
        {
          data.map((ele, index) => {
            return <Card key={index} card={ele} inCart={inCart} setInCart={setInCart} />
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
