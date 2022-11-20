
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
    
     <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/service">
            <Service></Service>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
