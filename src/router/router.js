import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

const PageNotFound = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>
                Página Não Encontrada!
            </h1>
        </>
    );
}