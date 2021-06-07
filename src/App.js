import Home from './components/Home';
import AboutTripper from './components/AboutTripper';
import Contact from './components/Contact';
import TripperFeatures from './components/TripperFeatures';
import NavigationBar from './components/NavigationBar';
import AboutMe from './components/AboutMe.js';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/AboutTripper' component={AboutTripper} />
        <Route exact path='/TripperFeatures' component={TripperFeatures} />
        <Route exact path='/AboutMe' component={AboutMe} />
        <Route exact path='/Contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
