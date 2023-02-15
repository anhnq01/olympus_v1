import React, { Component } from 'react';
import Banner from '../header/Banner';
import Facilities from './Facilities';
import About from './About';
import Class from './Class';
import Registration from './Registration';
import Team from './Team';
import Testimonial from './Testimonial';
import Blog from './Blog';
class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Facilities />
                <About />
                <Class />
                <Registration />
                <Team />
                <Testimonial />
                <Blog />
            </div>
        );
    }
}

export default Home;