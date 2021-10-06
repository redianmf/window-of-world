import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import DetailBook from './pages/DetailBook';
import DetailBookAddedList from './pages/DetailBookAddedList';
import ReadBook from './pages/ReadBook';
import Subscribe from './pages/Subscribe';
import UserProfile from './pages/UserProfile';
import AddBook from './pages/AddBook';
import ListTrans from './pages/ListTrans';
import PageNotFound from './pages/PageNotFound';
import ModalSubscribeView from './pages/ModalSubscribeView';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/subscribe" component={Subscribe} />
        <PrivateRoute path="/profile" component={UserProfile} />
        <PrivateRoute path="/read" component={ReadBook} />
        <PrivateRoute path="/add-book" component={AddBook} />
        <PrivateRoute path="/list-trans" component={ListTrans} />
        <PrivateRoute path="/book-details/:id" component={DetailBook} />
        <PrivateRoute path="/my-book-details" component={DetailBookAddedList} />

        <Route exact path="/modals" component={ModalSubscribeView} />
        <Route exact path="*" component={PageNotFound} />      
      </Switch>
    </Router>


    // <div className="App">
    // <LandingPage />
    // <Home />
    // <SubscribeActive (not used) />
    // <DetailBook />
    // <DetailBookAddedList (not used) />
    // <ReadBook />
    // <Subscribe />
    // <UserProfile />
    // <AddBook />
    // <ListTrans />
    // <ModalSubscribeView />
    // </div>
  );
}

export default App;
