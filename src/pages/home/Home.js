import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Home.css'

export default function Home() {

    return (
        <div>
            <ul>
                <li>
                    <Link
                        className="active"
                        to="/page1">
                        Page1
                    </Link>
                    <Link
                        className="active"
                        to="/page2">
                        Page2
                    </Link>
                </li>
            </ul>
        </div>
    )
}