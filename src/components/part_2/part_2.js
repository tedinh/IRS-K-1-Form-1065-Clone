import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import Header from './header';
import Footer from './Footer2';
import ProgressBar from './progressbar';

import Left from './e_i2';
import Right from './j_m';

import './part_2.css';

class Part_2 extends Component {
    render(){
        return(
            <div>
            <ProgressBar />
            <Header />
            <div className="part2">
                <Left />
                <Right />
            </div>

            <Footer />

            </div>
        )
    }
}

export default Part_2