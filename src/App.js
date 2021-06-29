import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/home/Home';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
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

      <Router>
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/" component={Home} exact />
          <Route path="/page1" component={Page1} exact />
          <Route path="/page2" component={Page2} exact />
        </Switch>
      </Router>
    </div>
  );
}

