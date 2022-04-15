
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Favorite from "./pages/Favorite";


function App() {
  return (
  <Router>
    <Navbar />
    <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/movies' exact component={HomePage}/>
    <Route path='/movies/:id' exact component={MovieDetails}/>
    <Route path='/Favourite' exact component={Favorite}/>

    
    <Route path='**' exact component={NotFound}/>
   
   
    </Switch>
  </Router>
  );
}

export default App;
