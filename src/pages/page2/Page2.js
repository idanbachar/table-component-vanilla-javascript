import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from '../../components/Table/Table';

export default function Page2() {

    const users = useSelector(state => state.users);

    return (
        <div>
            <Table
                data={users}
            />
        </div>
    )
}