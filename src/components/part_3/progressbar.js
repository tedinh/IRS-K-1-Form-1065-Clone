import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

// import './progressbar.css'

class ProgressBar extends Component {
    render(){
        return(
            <div className="dot-group">
                <Link to="/">
                <div>
                    <span className="dot"></span>
                    <p className="dot-black">Part I</p>
                </div>
                </Link>
                <Link to="/part2">
                <div>
                        <span className="dot"></span>
                        <p className="dot-black">Part II</p>
                </div>
                </Link>
                <div className="dot-1">
                        <span className="dot dot1"></span>
                        <p>Part III</p>
                </div>
            </div>
        )
    }
}

export default ProgressBar