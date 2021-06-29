import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/home/Home';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import './App.css';

export default function App() {

  const LIMIT_FETCH_RESULTS = 25;
  const FETCH_URL = "http://jsonplaceholder.typicode.com";
  let FETCH_ROUTE = useSelector(state => state.fetchRoute);

  const dispatch = useDispatch();

  const getData = async () => {

    const res = await fetch(`${FETCH_URL}/${FETCH_ROUTE}?_limit=${LIMIT_FETCH_RESULTS}`);
    const data = await res.json();
    console.log(data);
    if (res.status !== 404) {
      dispatch({
        type: "INIT",
        payload: data
      })
    }
    else {
      dispatch({
        type: "INIT",
        payload: []
      });
    }
  }

  useEffect(() => {
    getData();
  }, [FETCH_ROUTE])

  return (
    <div className="App">
      <Router>
        <div class="topnav" id="myTopnav">
          <Link
            to="/page1">
            Page1
          </Link>
          <Link
            to="/page2">
            Page2
          </Link>
        </div>
        <Switch>
          <Route path="/page1" component={Page1} exact />
          <Route path="/page2" component={Page2} exact />
        </Switch>
      </Router>
    </div>
  );
}

