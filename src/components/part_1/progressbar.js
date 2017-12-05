import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import './progressbar.css'

class ProgressBar extends Component {
    render(){
        return(
            <div className="dot-group">
                <div className="dot-1">
                    <span className="dot dot1"></span>
                    <p>Part I</p>
                </div>
                <div>
                    <Link to='/part2'>
                        <span className="dot"></span>
                        <p className="dot-black">Part II</p>
                    </Link>
                    
                </div>
                <div>
                    <Link to='/part3'>
                        <span className="dot"></span>
                        <p className="dot-black">Part III</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ProgressBar