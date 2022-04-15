
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HomeFunctionExample from '../src/pages/HomeFunctionExample';
// import Userdata from './UserData';
import AddUser from './pages/addUser';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomeFunctionExample from './pages/HomeFunctionExample';
import Navbar from './components/Navbar/Navbar';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
        <Router my-5>
        <Navbar />
        <Switch>
        <Route path='/' exact component={HomeFunctionExample} />
        <Route path='/a/:id'  component={HomeFunctionExample} />
        <Route path='/add-user' component={AddUser} />
        <Route path='/products' exact component={Products} />
        <Route path='/products/:id' component={ProductDetails} />
        <Route path='**' component={NotFound} />
        </Switch>
        </Router>
  );
}

export default App;
 