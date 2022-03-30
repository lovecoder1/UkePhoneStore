import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import './App.css'
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Menu" exact component={Menu} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
