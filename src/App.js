import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import StackOverflow from "./components/StackOverflow";
import ViewQuestion from './components/ViewQuestion' 
import Question from './components/AddQuestion/Question';
import Auth from './components/Auth'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { useEffect } from 'react';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

    // useEffect(() =>{
    //   auth.onAuthStateChanged
    // },[])
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/" component={StackOverflow}/>
          <Route exact path="/question" component={ViewQuestion}/>
          <Route exact path="/add-question" component={Question}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
