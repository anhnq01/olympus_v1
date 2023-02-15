import React, { Component } from 'react';
import Home from '../client/container/Home';
import Contact from '../client/container/Contact';
import AboutUs from '../client/container/AboutUs';
import OurClasses from '../client/container/OurClasses';
import OurTeachers from '../client/container/OurTeachers';
import Gallery from '../client/container/Gallery';
import OurBlog from '../client/container/OurBlog';
import BlogDetails from '../client/container/BlogDetails';
import { Switch, Route } from "react-router-dom";


const routes = [
    {
        path: "/lien-he",
        component: Contact
    }, {
        path: "/gioi-thieu",
        component: AboutUs
    }, {
        path: "/chuong-trinh-hoc",
        component: OurClasses
    }, {
        path: "/doi-ngu-giao-vien",
        component: OurTeachers
    }, {
        path: "/guong-mat-vi-edu",
        component: Gallery
    }, {
        path: "/tin-tuc",
        component: OurBlog,
    }, {
        path: "/tin-chi-tiet/:slug/:id",
        component: BlogDetails
    }, {
        path: "/*",
        component: Home
    }
];

class ClientLinks extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={"/"}>
                    <Home></Home>
                </Route>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} child={route.child} />
                ))}
                <Route path={"/*"}>
                    <Home></Home>
                </Route>
            </Switch>
        );
    }
}

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} child={route.child} />
            )}
        />
    );
}


export default ClientLinks;