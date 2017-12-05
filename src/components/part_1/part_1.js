import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import ProgressBar from './progressbar';

import Part2 from '../part_2/part_2';

import './part_1.css';

class Part_1 extends Component {
    render(){
        return(
            <div>

                <ProgressBar />
                <Header />

                <div className="part1">
                <p className="part1_input_text">Partnership's employer identification number</p>
                <input className="part1_input_a"type="text" />

                <p className="part1_input_text">Partnership's name, address, city, state, and ZIP code</p>
                <textarea className="part1_textarea_b" />

                <p className="part1_input_text">IRS Center where partnership filed return</p>
                <input className="part1_input_a" type="text"/>

                <br/>
                <br/>

                <input className="part1_checkbox"type="checkbox" />
                <span>Check this box if this is a publicly traded partnership (PTP)</span>

                <br/>

                <div className="part1_buttons">
                    <div className="left-button">
                        <h4 className="previous">PREVIOUS PART</h4>
                    </div>

                    <Link to="/part2">
                    <div className="right-button">
                        <h4 className="next">NEXT PART</h4>
                    </div>
                    </Link>
                </div>


                </div>

                <Footer />
            </div>
        )
    }
}

export default Part_1