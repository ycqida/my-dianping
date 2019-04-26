
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import App from '@/pages';

import Home from '@/pages/Home';
import Search from '@/pages/Search'
import List from '@/pages/List';

import City from '@/pages/City'
import Login from '@/pages/Login'
import User from '@/pages/User';

import Detail from '@/pages/Detail';
import DetailPage from '@/pages/Detail/DetailPage';

import NotFound from '@/pages/NotFound';

export const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/city",
        component: City,
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/search/:category/:keyword',
        component: Search
    },
    {
        path: "/list",
        component: List
    },
    {
        path: "/detail",
        component: Detail,
        routes: [
            {
                path: '/:id',
                component: DetailPage
            }
        ]
    },{
        path:'/*',
        component: NotFound
    }
];


export class RouterMap extends React.Component {
    render() {
        return (
            
            <Router>
                <App>
                <Switch>
               
                    <Redirect from='/home' to='/'/>
                    {
                        routes.map((route, key) => {
                            let { component, ...props } = route 
                            return(
                            <Route
                                key = {key}
                                {...props}
                                render={props => (
                                    // pass the sub-routes down to keep nesting
                                    <route.component {...props} routes={route.routes} />
                                )}
                            />
                            )
                        })
                    }
                
                </Switch>
                </App>
            </Router>
        );
    }
}

