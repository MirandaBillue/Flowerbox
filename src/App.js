import "./styles.css";
import Card from "./components/Card";
import data from "./flowerData";
console.log("This is flowerData", data)

function App() {
  const cards = data.map( (ele, index) => {
    return (
      <Card 
        {...ele}
        key={index}
      />
    )
  })

  console.log('this is cards', cards)


  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
        <a href="#about">about</a>
        <a href="#collections">collections</a>
        <a href="#deliveryservice">delivery service</a>
        <a href="#location">location</a>
        <a href="#contactus">contact us</a>
        </nav>
        <img src="https://i.imgur.com/U8tiT5X.png" className="banner" alt=""/>
      </header>
        
       <section className="cards">
        {cards}
       </section>
      <footer className="footer">
      <img src="https://i.imgur.com/KxfWH9J.png" className="footerimg" alt=""/>
      <h5 className="imgtext">FLOWERBOX / EST.2019</h5>
        <ul className="list">
        <h4 className="fh4">customer service</h4>
          <li>SATISFACTION COMMITMENT</li>
          <li>DELIVERY POLICIES</li>
          <li>CANCELLATIONS</li>
          <li>RETURN POLICY</li>
        </ul>
        <ul className="list">
        <h4 className="fh4">flowerbox</h4>
          <li>TERMS OF SERVICE</li>
          <li>PRIVACY POLICY</li>
          <li>CAREER OPPORTUNITIES</li>
          <li>MORE INFORMATION</li>
        </ul>
      </footer>
      
    </div>
  );
}

export default App;
