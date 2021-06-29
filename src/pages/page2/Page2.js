import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Page2() {

    return (
        <div>
            <Router>
                <ul>
                    <li>
                        <Link
                            className="active"
                            to="/Page1">
                            Page1
                        </Link>
                        <Link
                            className="active"
                            to="/Page2">
                            Page2
                        </Link>
                    </li>
                </ul>
            </Router>
        </div>
    )
}