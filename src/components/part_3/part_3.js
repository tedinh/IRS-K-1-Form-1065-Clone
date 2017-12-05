import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import Header from './header';
import Right from '../part_2/j_m';
import Left from './left';
import Footer from '../part_2/Footer2';
import ProgressBar from './progressbar';

import './part_3.css';

class Part_3 extends Component {
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

export default Part_3