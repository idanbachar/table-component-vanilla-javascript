import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from '../../components/Table/Table';

export default function Page2() {

    //const data = useSelector(state => state.data);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const getData = async () => {

        const res = await fetch("http://jsonplaceholder.typicode.com/comments?_limit=25");
        const resData = await res.json();

        if (res.status !== 404)
            setData(resData);
    }

    useEffect(() => {

        getData();

    }, [])

    return (
        <div>
            <h1>Page 2 displays comments:</h1>
            <Table
                data={data}
            />
        </div>
    )
}