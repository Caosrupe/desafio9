import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    
    <BrowserRouter>
    <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route path="/categories/:categoryid">
            <ItemListContainer/>
          </Route>
          <Route path="/categories">
            <ItemListContainer/>
          </Route>
          <Route path="/item/:itemid">
            <ItemDetailContainer/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>   
      <Footer />  
    </BrowserRouter>
    
    );
}



export default App;