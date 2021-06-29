import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import './App.css';

export default function App() {

  const LIMIT_FETCH_RESULTS = 25;
  const FETCH_URL = "http://jsonplaceholder.typicode.com/posts";

  const dispatch = useDispatch();

  const getData = async () => {

    const res = await fetch(`${FETCH_URL}/?_limit=${LIMIT_FETCH_RESULTS}`);
    const data = await res.json();
    dispatch({
      type: "INIT",
      payload: data
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/home" component={Home} exact />
              <Route path="/" component={Home} exact />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

