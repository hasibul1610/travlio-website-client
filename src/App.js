import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Private from './components/Private/Private';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login/Login';
import Menubar from './components/Shared/Menubar/Menubar';
import Footer from './components/Shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';



function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/private">
              <Private></Private>
            </PrivateRoute>
            <Route exact path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
