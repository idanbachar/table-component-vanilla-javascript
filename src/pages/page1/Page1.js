import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from '../../components/Table/Table';

export default function Page1() {

    const data = useSelector(state => state.data);

    return (
        <div>
            <h1>Page 1 displays data fetched from sever:</h1>
            <Table
                data={data}
            />
        </div>
    )
}